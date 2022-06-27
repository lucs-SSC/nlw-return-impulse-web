import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mailAdapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "452c7bd3ecb26b",
      pass: "1c9d61824c0b1c"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body}: SendMailData) {
    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Matheus Sandi <zTeussandi@hotmail.com>',
        subject,
        html: body,
    })
    };
}