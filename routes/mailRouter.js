var express = require('express');
const jwt = require('jsonwebtoken');
var router = express.Router();

const transporter = require('../mailer/transporter');
const message = require('../mailer/mailMessage')


router.post('/mail/send', function (req, res, next) {
    const from = 'amaury.tobiasqr@gmail.com';
    const to = req.body.to;
    const role = req.body.iURole;
    
    const token = jwt.sign({ sub: to, role: role }, 'invite', { expiresIn: '1 day' });

    transporter.sendMail(message(from, to, token))
        .then(info => {
            return res.status(200).json(info);
        })
        .catch(err => {
            return res.status(500).json(err);
        });
});

module.exports = router;