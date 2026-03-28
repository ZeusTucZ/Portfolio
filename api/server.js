import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const handler = async (req, res) => {
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ message: 'Missing RESEND_API_KEY' });
  }

  try {
    const { name, email, subject, message } = req.body ?? {};

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>',
      to: process.env.CONTACT_TO_EMAIL || 'lorenzo.orrante@icloud.com',
      replyTo: email,
      subject: subject,
      html: `
        <h1>Nuevo mensaje desde el portfolio</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ data, message: 'Email sent successfully' });
  } catch (error) {
    return res.status(502).json({
      message: 'Failed to send email',
      error: error.message,
    });
  }
};

export default handler;
