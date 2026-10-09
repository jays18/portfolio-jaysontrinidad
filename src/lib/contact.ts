import { profile } from "./portfolio-data";

export type ContactPayload = { name: string; email: string; message: string };

// No email service is connected yet: this opens the visitor's email app with the
// message pre-filled. Replace with a server call once an email service is added.
export async function sendContactMessage(payload: ContactPayload): Promise<void> {
  const subject = encodeURIComponent(`Portfolio message from ${payload.name}`);
  const body = encodeURIComponent(`${payload.message}\n\n— ${payload.name} (${payload.email})`);
  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
}
