/**
 * Sends a website form to the site's own server (server.js), which emails it
 * with Nodemailer to letstalk@furniconcepts.com and chandru@hubble-web.com.
 *
 * `form` names the form: 'contact' | 'newsletter' | 'download' | 'career'.
 * `fields` is a plain object, or a FormData when a file (a CV) goes with it.
 *
 * Resolves on success; rejects with a reader-facing message otherwise.
 */
const ENDPOINT = '/api/forms';

export async function sendForm(form, fields) {
  const isData = fields instanceof FormData;
  // a filled-in honeypot means a bot: pretend it went, send nothing
  if (isData ? fields.get('botcheck') : fields.botcheck) return;

  let body;
  if (isData) {
    fields.set('form', form);
    body = fields;
  } else {
    body = JSON.stringify({ ...fields, form });
  }
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: isData ? { Accept: 'application/json' } : { 'Content-Type': 'application/json', Accept: 'application/json' },
    body,
  }).catch(() => null);
  const data = res ? await res.json().catch(() => null) : null;
  if (!res?.ok || !data?.ok) throw new Error(data?.error || 'Your message could not be sent.');
}

/** Hidden field that people never see or fill, so only bots do. */
export const HONEYPOT = { type: 'checkbox', name: 'botcheck', tabIndex: -1, 'aria-hidden': true, style: { display: 'none' } };
