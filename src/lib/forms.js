/**
 * Sends a form to Web3Forms, which emails it to the address the access key
 * was created for. The key lives in .env as VITE_WEB3FORMS_KEY (Web3Forms
 * keys are meant to sit in page code; they can only send to that address).
 *
 * Resolves on success; rejects with a reader-facing message otherwise.
 */
const ENDPOINT = 'https://api.web3forms.com/submit';
const KEY = import.meta.env.VITE_WEB3FORMS_KEY;

export async function sendForm(subject, fields) {
  if (!KEY) throw new Error('This form is not connected yet.');
  // a filled-in honeypot means a bot: pretend it went, send nothing
  if (fields.botcheck) return;
  // a form's own "subject" field is kept as the topic, so it can't replace
  // the email's subject line
  const { botcheck, subject: topic, ...rest } = fields;
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ ...rest, ...(topic ? { topic } : {}), access_key: KEY, subject, from_name: 'Furniconcepts website' }),
  }).catch(() => null);
  const data = res ? await res.json().catch(() => null) : null;
  if (!res?.ok || !data?.success) throw new Error('Your message could not be sent.');
}

/** Hidden field that people never see or fill, so only bots do. */
export const HONEYPOT = { type: 'checkbox', name: 'botcheck', tabIndex: -1, 'aria-hidden': true, style: { display: 'none' } };
