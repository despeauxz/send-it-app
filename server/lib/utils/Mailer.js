/* eslint-disable indent */
import nodemailer from 'nodemailer';
import passwordReset from '../emailTemplates/passwordReset';

const url = process.env.BASE_URL;

/**
 * Mailer Event Emitter
 * @exports
 * @class Mailer
 * @extends EventEmitter
 */
class Mailer {
  /**
   * Sends Mail
   * @method sendMail
   * @memberof Mailer
   * @param {string} to
   * @param {string} subject
   * @param {string} message
   * @returns {void}
   */
    static sendMail({ to, subject, message }) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: '"SendIT" <noreply@send-it-app.com>',
            to,
            subject,
            html: message,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
        });
    }

    /**
   * Sends Mail for user to use to reset his password
   * @method forgotPasswordMail
   * @memberof Mailer
   * @param {string} token
   * @param {string} emailAddress
   * @returns {void}
   */
    static forgotPasswordMail(token, emailAddress) {
        const message = passwordReset(url, token, emailAddress);

        return Mailer.sendMail({
            to: emailAddress,
            subject: 'SendIT: Reset Password',
            message,
        });
    }
}

export default Mailer;
