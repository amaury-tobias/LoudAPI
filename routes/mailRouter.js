const express = require('express');
const jwt = require('jsonwebtoken');
const TokenModel = require('../models/tokenModel');
const transporter = require('../mailer/transporter');
const message = require('../mailer/mailMessage');
const invitation = require('../mailer/mailInvite');
const LogModel = require('../models/logModel');

var router = express.Router();

router.post('/mail/send', async function (req, res, next) {
    const from = 'Guía del Lago <amaury.tobiasqr@gmail.com>';
    const to = req.body.iUEmail;
    const role = req.body.iURole;
    try {
        let result = await TokenModel.create({ mail: to, role: role });
        let token = await jwt.sign({ sub: result._id }, 'invite', { expiresIn: '1 day' });
        let mailStatus = await transporter.sendMail(message(from, to, token));
        //res.status(200).json({ mailStatus });
        LogModel.create({ username: req.user.name, description: `Usuario ${to} creado` });
        res.status(200).redirect('/panel');
    } catch (err) {
        next(err)
    }
});

router.post('/mail/invite', async function (req, res, next) {
    const from = 'Guía del Lago <amaury.tobiasqr@gmail.com>';
    const to = req.body.iCEmail;

    try {
        let mailStatus = await transporter.sendMail(invitation(from, to));
        //res.status(200).json({ mailStatus });
        LogModel.create({ username: req.user.name, description: `Cliente ${to} invitado` });
        res.status(200).redirect('/panel');
    } catch (err) {
        next(err)
    }
});

module.exports = router;