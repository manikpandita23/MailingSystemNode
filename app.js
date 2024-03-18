const nodeMailer = require('nodemailer');

const html = `
    <h1>Hello World</h1>
    <p>This is a test email.</p>
`;

async function main() {
    const transporter = nodeMailer.createTransport({
        host: 'mail.openjavascript.info',
        port: 465,
        secure: true,
        auth: {
            user: 'test@openjavascript.info', // Correct email address
            pass: 'your_password' // Correct password
        }
    });

    try {
        const info = await transporter.sendMail({
            from: 'OpenJavaScript <test@openjavascript.info>',
            to: 'test2@openjavascript.info',
            subject: 'Testing',
            html: html,
        });
        console.log("Message sent:", info.messageId);
    } catch (error) {
        console.error("Error:", error);
    }
}

main();
