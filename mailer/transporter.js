const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER_GMAIL,
        pass: process.env.PASS_GMAIL
    }
});

module.exports = transporter;