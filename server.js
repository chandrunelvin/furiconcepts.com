/**
 * The website's Node server, for Hostinger / cPanel "Node.js app" hosting.
 *
 * - Serves the built site from dist/ (run `npm run build` first), keeping the
 *   old .php URLs as HTML pages, the 301 redirects in dist/_redirects, and the
 *   app shell for every other path.
 * - POST /api/forms receives every website form and emails it with Nodemailer
 *   over the SMTP account set in .env, to everyone listed in MAIL_TO.
 *
 * Settings live in .env (see .env.example). Start with `npm start`.
 */
import 'dotenv/config';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import multer from 'multer';
import nodemailer from 'nodemailer';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, 'dist');
const PORT = process.env.PORT || 3000;

const MAIL_TO = (process.env.MAIL_TO || 'letstalk@furniconcepts.com,chandru@hubble-web.com')
  .split(',').map((s) => s.trim()).filter(Boolean);

const transporter = nodemailer.createTransport({
  // one kept-open connection, so busy hours don't log in once per email
  // (Yahoo blocks an account after too many logins in a short time)
  pool: true,
  maxConnections: 2,
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 465),
  // port 465 uses SSL from the start; 587 upgrades with STARTTLS
  secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : Number(process.env.SMTP_PORT || 465) === 465,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});
const MAIL_FROM = process.env.MAIL_FROM || process.env.SMTP_USER;
// Some providers (Yahoo) refuse mail whose Reply-To is another address; with
// MAIL_REPLY_TO=false the visitor's address goes in the email as a link instead
const USE_REPLY_TO = process.env.MAIL_REPLY_TO !== 'false';

/* ---------- form emails ---------- */

/** What each form is called in the email, and which fields it may send. */
const FORMS = {
  contact: { title: 'Website enquiry', fields: ['name', 'email', 'phone', 'country', 'company', 'subject', 'message'] },
  newsletter: { title: 'Newsletter sign-up', fields: ['email', 'page'] },
  download: { title: 'Catalogue download', fields: ['name', 'email', 'phone', 'country', 'company', 'catalogue', 'brand', 'file'] },
  career: { title: 'Job application', fields: ['name', 'email', 'phone', 'subject', 'message'] },
};
const LABELS = {
  name: 'Name', email: 'Email', phone: 'Phone', country: 'Country', company: 'Company',
  subject: 'Subject', message: 'Message', page: 'Signed up on page', catalogue: 'Catalogue',
  brand: 'Brand', file: 'File',
};

const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const oneLine = (s, max = 160) => String(s ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, max);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function buildMail(type, body, file) {
  const form = FORMS[type];
  const values = Object.fromEntries(
    form.fields.map((k) => [k, String(body[k] ?? '').trim().slice(0, k === 'message' ? 5000 : 300)]).filter(([, v]) => v)
  );
  if (type === 'career') values.subject = values.subject && `Applying for ${values.subject}`;

  const who = values.name || values.email || 'website visitor';
  const about = type === 'download' ? values.catalogue : type === 'contact' || type === 'career' ? body.subject : '';
  const subject = oneLine(`${form.title}${about ? `: ${about}` : ''} (${who})`);

  const rows = Object.entries(values).map(([k, v]) =>
    `<tr><td style="padding:8px 14px;background:#f4f6f5;font-weight:600;vertical-align:top;white-space:nowrap">${esc(LABELS[k] ?? k)}</td>` +
    `<td style="padding:8px 14px;white-space:pre-wrap">${esc(v)}</td></tr>`
  ).join('');
  const replyLink = EMAIL_RE.test(values.email)
    ? `<p style="margin:0 0 14px"><a href="mailto:${esc(values.email)}" style="display:inline-block;background:#2f9e6e;color:#fff;text-decoration:none;padding:9px 16px;border-radius:6px;font-weight:600">Reply to ${esc(values.email)}</a></p>`
    : '';
  const html =
    `<div style="font-family:Arial,sans-serif;font-size:14px;color:#16211c">` +
    `<h2 style="font-size:18px;margin:0 0 14px">${esc(form.title)}</h2>` +
    replyLink +
    `<table style="border-collapse:collapse;border:1px solid #dfe5e2">${rows}</table>` +
    (file ? `<p style="margin-top:14px">CV attached: ${esc(file.originalname)}</p>` : '') +
    `<p style="margin-top:18px;color:#6b7770;font-size:12px">Sent from the furniconcepts.com ${esc(form.title.toLowerCase())} form.</p></div>`;
  const text = Object.entries(values).map(([k, v]) => `${LABELS[k] ?? k}: ${v}`).join('\n');

  return {
    from: { name: 'Furniconcepts Website', address: MAIL_FROM },
    to: MAIL_TO,
    replyTo: USE_REPLY_TO && EMAIL_RE.test(values.email) ? values.email : undefined,
    subject,
    text,
    html,
    attachments: file ? [{ filename: file.originalname, content: file.buffer, contentType: file.mimetype }] : [],
  };
}

/** A few sends per visitor per window, so the forms can't be used to flood the inboxes. */
const hits = new Map();
const RATE_WINDOW = 10 * 60 * 1000;
const RATE_MAX = 15;
function tooMany(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_MAX;
}

const CV_TYPES = /\.(pdf|docx?)$/i;
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024, files: 1 },
  fileFilter: (req, file, cb) => cb(null, CV_TYPES.test(file.originalname)),
});

const app = express();
app.set('trust proxy', true);
app.disable('x-powered-by');

app.post('/api/forms', express.json({ limit: '50kb' }), upload.single('cv'), async (req, res) => {
  const body = req.body ?? {};
  const type = body.form;
  if (!FORMS[type]) return res.status(400).json({ ok: false, error: 'Unknown form.' });
  // the hidden honeypot field only bots fill: pretend it went, send nothing
  if (body.botcheck) return res.json({ ok: true });
  if (tooMany(req.ip)) return res.status(429).json({ ok: false, error: 'Too many messages. Please try again later.' });
  if (!EMAIL_RE.test(String(body.email ?? '').trim())) return res.status(400).json({ ok: false, error: 'Please enter a valid email address.' });
  if (type === 'career' && !req.file) return res.status(400).json({ ok: false, error: 'Please attach your CV as a PDF or Word file.' });

  try {
    await transporter.sendMail(buildMail(type, body, req.file));
    res.json({ ok: true });
  } catch (err) {
    console.error(`[forms] ${type} email failed:`, err.message);
    res.status(502).json({ ok: false, error: 'Your message could not be sent.' });
  }
});

// a CV over the size limit lands here
app.use('/api', (err, req, res, next) => {
  if (err instanceof multer.MulterError) return res.status(400).json({ ok: false, error: 'Please choose a CV under 5 MB.' });
  next(err);
});
app.use('/api', (req, res) => res.status(404).json({ ok: false, error: 'Not found.' }));

/* ---------- the website ---------- */

/** The 301s the build writes to dist/_redirects (Netlify format: from to 301). */
const REDIRECTS = new Map();
try {
  for (const line of fs.readFileSync(path.join(DIST, '_redirects'), 'utf8').split('\n')) {
    const [from, to, code] = line.trim().split(/\s+/);
    if (from && !from.startsWith('#') && code === '301') REDIRECTS.set(from, to);
  }
} catch { /* no build yet */ }

app.use((req, res, next) => {
  const to = REDIRECTS.get(req.path) ?? REDIRECTS.get(decodeURI(req.path));
  if (to) return res.redirect(301, to);
  next();
});

app.use(express.static(DIST, {
  extensions: ['html'],
  setHeaders: (res, file) => {
    // the old .php URLs are built as static HTML pages
    if (file.endsWith('.php')) res.setHeader('Content-Type', 'text/html; charset=utf-8');
  },
}));

// every other path is a page of the app
app.get('*', (req, res) => res.sendFile(path.join(DIST, 'index.html')));

// a numeric port listens on every network interface so the host's proxy can reach it;
// some panels pass a socket path in PORT instead, which is used as given
const listenArgs = /^\d+$/.test(String(PORT)) ? [Number(PORT), '0.0.0.0'] : [PORT];
app.listen(...listenArgs, () => {
  console.log(`Furniconcepts site on port ${PORT}, forms email ${MAIL_TO.join(', ')}`);
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER) console.warn('SMTP is not set up yet: add the SMTP_* settings to .env');
});
