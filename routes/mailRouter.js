var express = require('express');
var router = express.Router();

const transporter = require('../mailer/transporter');
const message = require('../mailer/mailMessage')


router.post('/mail/send', function (req, res, next) {
    const from = '';
    const to = req.body.to;
    const subject = req.body.subject;

    transporter.sendMail(message('amaury.tobiasqr@gmail.com', to, subject))
        .then(info => {
            return res.status(200).json(info);
        })
        .catch(err => {
            return res.status(500).json(err);
        });
});

module.exports = router;