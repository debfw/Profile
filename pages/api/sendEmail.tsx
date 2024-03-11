import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import { render } from '@react-email/render';
import React from 'react';
import { EmailButton } from "../../src/components/emailbutton";
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler({req, res}:{req:NextApiRequest, res:NextApiResponse}) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Assuming the recipient's email is passed in the request body
  const { recipientEmail } = req.body; 

  // Initialize the MailerSend object with your API key
  const mailerSend = new MailerSend({
    apiKey: process.env.MAILERSEND_API_KEY as string,
  });

  // Render your EmailButton component to HTML
  const emailHtml = render(<EmailButton url="clwork1324@gmail.com"/>); 

  const sentFrom = new Sender("trial-vywj2lpxmq147oqz.mlsender.net", "liko");
  const recipients = [new Recipient(recipientEmail, "Recipient Name")]; // Use the recipientEmail from the request

  // Construct the email parameters
  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setSubject("This is a Subject")
    .setHtml(emailHtml); 

  try {
    await mailerSend.email.send(emailParams);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error("Failed to send email:", error);
    res.status(500).json({ success: false, message: 'Failed to send email', error });
  }
}
