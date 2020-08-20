const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'petrosyanartur78@gmail.com',
        pass: 'mifynbctqdpmdlei'
    },
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
});

app.use(cors())
app.use(bodyParser.json())

app.post('/email', function (req, res) {

    const mailOptions = {
        from: req.body.email,
        sender: req.body.email,
        to: 'petrosyanartur78@gmail.com',
        subject: req.body.subject,
        text: req.body.message
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
})

app.listen(4000)
