import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json().catch(() => ({}));

    const { name, email, company, phone, project_type, message } = body;

    if (!name || !email || !message) {
      return Response.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    await base44.asServiceRole.entities.ContactSubmission.create({
      name,
      email,
      company: company || '',
      phone: phone || '',
      project_type: project_type || 'Other',
      message,
      status: 'New',
    });

    return Response.json({ ok: true, message: 'Thanks! Wendy will be in touch soon.' });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});
