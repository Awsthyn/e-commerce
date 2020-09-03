const server = require("express").Router();
const nodemailer = require("nodemailer")


//---------- Email: confirmacion -------
server.post("/creada", (req, res) => {
    console.log(req.body)
    const email = req.body.email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'darkmarket666@gmail.com',
            pass: 'grandePela'
        }
    });

    mailOptions = {
        from: "Dark Market",
        to: email,
        subject: "Hola! su compra ha sido confirmada.",
        text: "Te avisaremos cuando tu compra este siendo despachada. Podés seguir el estado de la orden en tu perfil de darkmarket.com"
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


//---------- Email: despachado -------
server.post("/procesando", (req, res) => {
    console.log('mail enviado')
    const {email} = req.body
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'darkmarket666@gmail.com',
            pass: 'grandePela'
        }
    });

    mailOptions = {
        from: "Dark Market",
        to: email,
        subject: "Hola! Su compra ya esta en proceso.",
        text: "Le estara llegando en los próximos días"
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