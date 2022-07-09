import nodemailer from 'nodemailer'

export default async (req, res) => {
    const body = JSON.parse(req.body)

    const message = `
        Name: ${body.name}\r\n
        Email: ${body.email}\r\n
        Phone: ${body.phone}\r\n
        Message: ${body.message}
  `;

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'kacie.grant98@ethereal.email', // generated ethereal user
            pass: 'QQWXgdQn7B6TQgUXeC', // generated ethereal password
        },
    });

    try {
        if (req.method === 'POST') {
            await transporter.sendMail({
                from: 'The Name of this Site', // sender address
                to: 'kacie.grant98@ethereal.email', // list of receivers
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