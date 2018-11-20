const express = require('express');
const jwt = require('jsonwebtoken');
const TokenModel = require('../models/tokenModel');
const transporter = require('../mailer/transporter');
const message = require('../mailer/mailMessage')

var router = express.Router();

router.post('/mail/send', async function (req, res, next) {
    const from = 'Guía del Lago <amaury.tobiasqr@gmail.com>';
    const to = req.body.iUEmail;
    const role = req.body.iURole;
    try {
        let result = await TokenModel.create({ mail: to, role: role });
        let token = await jwt.sign({ sub: result._id }, 'invite', { expiresIn: '1 day' });
        let mailStatus = await transporter.sendMail(message(from, to, token));
        res.status(200).json({ mailStatus });
    } catch (err) {
        next(err)
    }
});

module.exports = router;