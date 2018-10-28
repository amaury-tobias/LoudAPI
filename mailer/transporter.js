const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'amaury.tobiasqr@gmail.com',
        pass: 'kdrfmjnknfrlnhyv'
    }
});

module.exports = transporter;