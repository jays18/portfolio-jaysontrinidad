export type ContactPayload = { name: string; email: string; message: string };

// Connect an email service here later (e.g. a server function or form API).
export async function sendContactMessage(payload: ContactPayload): Promise<void> {
  await new Promise((r) => setTimeout(r, 700));
  void payload;
}
