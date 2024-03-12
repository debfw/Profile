import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import { NextApiRequest, NextApiResponse } from 'next';



export default async function handler(req: NextApiRequest,
  res: NextApiResponse) {
  if (req?.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Render your EmailButton component to HTML
  const recipientEmail = 'clwork1324@gmail.com'; 

  // Initialize the MailerSend object with your API key
  const mailerSend = new MailerSend({
    apiKey: process.env.MAILERSEND_API_KEY as string,
  });


  const sentFrom = new Sender("noreply@trial-vywj2lpxmq147oqz.mlsender.net", "Profile");
  const recipients = [new Recipient(recipientEmail, "Liko")]; 

  // Construct the email parameters
  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setSubject("This is a Subject")
    .setHtml('<p>This is the email content</p>'); 

  try {
    await mailerSend.email.send(emailParams);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error("Failed to send email:", error);
    res.status(500).json({ success: false, message: 'Failed to send email', error });
  }
}
