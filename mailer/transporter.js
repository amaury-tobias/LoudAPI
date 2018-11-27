const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER_GMAIL || 'amaury.tobiasqr@gmail.com',
        pass: process.env.PASS_GMAIL || 'ighszkvgguscffpe'
    }
});

module.exports = transporter;