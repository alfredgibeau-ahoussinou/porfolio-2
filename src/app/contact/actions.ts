'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Doit être un domaine vérifié sur Resend
      to: 'alfredgibeauahoussinou@gmail.com', // Ton email
      subject: `Nouveau message de ${name} : ${subject}`,
      replyTo: email,
      html: `<p><strong>Nom:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Sujet:</strong> ${subject}</p>
             <p><strong>Message:</strong></p>
             <p>${message.replace(/\n/g, '<br>')}</p>`,
    });
    return { success: true };
  } catch (error) {
    console.error('Erreur Resend:', error);
    return { success: false, error: "L'envoi de l'email a échoué." };
  }
} 