
import { render } from '@react-email/render';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import { EmailButton } from '../src/components/emailbutton';

const mailerSend = new MailerSend({
    apiKey: process.env.MAILERSEND_API_KEY || '',
});

const emailHtml = render(<EmailButton url="clwork1324@gmail.com"/>);

const sentFrom = new Sender("trial-vywj2lpxmq147oqz.mlsender.net", "liko");
const recipients = [
    new Recipient("your@client.com", "Your Client")
];

const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setSubject("This is a Subject")
    .setHtml(emailHtml)

mailerSend.email.send(emailParams);