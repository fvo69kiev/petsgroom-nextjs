import nodemailer from 'nodemailer'
import * as dotenv from 'dotenv'

dotenv.config()

export default async (req, res) => {
    const body = JSON.parse(req.body)

    const message = `
        Name: ${body.name};\r\n
        Email: ${body.email};\r\n
        Phone: ${body.phone};\r\n
        Message: ${body.message};\r\n
  `;

    let transporter = nodemailer.createTransport({
        // host: "smtp.ethereal.email",
        // port: 587,
        // secure: false, // true for 465, false for other ports
        // auth: {
        //     user: 'kacie.grant98@ethereal.email', // generated ethereal user
        //     pass: 'QQWXgdQn7B6TQgUXeC', // generated ethereal password
        // },
        host: process.env.HOST_PROVIDER,
        port: process.env.PORT_PROVIDER,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.USER_TO_EMAIL, // generated ethereal user
            pass: process.env.PASSWORD_TO_EMAIL, // generated ethereal password
        },
    });

    try {
        if (req.method === 'POST') {
            await transporter.sendMail({
                // from: 'petsgroom@nail.kiev.ua', // sender address
                // to: 'kacie.grant98@ethereal.email', // list of receivers
                from: 'petsgroom@nail.kiev.ua', // sender address
                to: 'nail.kiev.ua@gmail.com', // list of receivers
                subject: `Order from - Name: ${body.name}`, // Subject line
                text: message, // plain text body
                html: `<b>${message}</b>`, // html body
            })
            res.status(200).json({status: 'Ok'})
        }
    }
    catch (error) {
        console.log(error.message)
    }
}
