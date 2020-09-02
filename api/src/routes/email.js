const server = require("express").Router();
const nodemailer = require("nodemailer")



server.post("/send", (req, res) => {
    console.log('mail enviado')
    const {email, tipoDeMail} = req.body
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'darkmarket666@gmail.com',
            pass: 'grandePela'
        }
    });

    if(tipoDeMail === confirmacion) {
        mailOptions = {
            from: "Dark Market",
            to: email,
            subject: "Hola! su compra ha sido confirmada.",
            text: "Podés seguir el estado de la orden en tu perfil de darkmarket.com"
        }}
    if(tipoDeMail === despachado) {
        mailOptions = {
            from: "Dark Market",
            to: email,
            subject: "Hola! su compra ha sido despachada.",
            text: "Le estara llegando en los próximos días"
        }
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            res.status(500).send(error.message)
        } else {
            console.log("email enviado");
            res.status(200).jsonp(req.body)
        }
    })
})



module.exports = server;