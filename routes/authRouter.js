const express = require('express');
const createError = require('http-errors');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/usermodel');
const TokenModel = require('../models/tokenModel');

const router = express.Router();

const cookieMaxAge = 1000 * 60 * 60 * 24 * 10;

router.post('/signup', async function (req, res, next) {
    try {
        let token = req.query.id;
        let password = req.body.password;
        let name = req.body.name;

        let decoded = await jwt.verify(token, 'invite');
        let result = await TokenModel.findByIdAndDelete(decoded.sub);
        if (!result) {
            return next(createError(301,'Token caducado'));
        }

        let user = await UserModel.create({ name, email: result.mail, role: result.role, password });
        if (!user) {
            return next(createError(500, 'Error al crear el usuario'));
        }

        let body = { _id: user._id, email: user.email };
        let resToken = jwt.sign({ user: body }, 'GuiaDelLago');
        res.status(201).cookie('jwt', resToken, { maxAge: cookieMaxAge });
        res.redirect('/');

    } catch (err) {
        next(err);
    }
});

router.get('/registro', async function (req, res, next) {
    let token = req.query.id;
    try {
        let decoded = await jwt.verify(token, 'invite');
        let result = await TokenModel.findById(decoded.sub);
        if (!result) {
            return next(createError(301,'Token caducado'));
        }
        res.locals.token = token;
        res.render('signup');

    } catch (err) {
        next(err);
    }
});

router.post('/login', function (req, res, next) {
    const remember = req.body.remember;

    passport.authenticate('login', { session: false }, (err, user, info) => {
        if (err | !user) { return next(createError(400, info)); }
        
        req.login(user, { session: false }, (err) => {
            if (err) { return next(err) }

            const body = { _id: user._id, email: user.email };
            const token = jwt.sign({ user: body }, 'GuiaDelLago');
            if (remember) {
                res.cookie('jwt', token, { maxAge: cookieMaxAge });
            } else {
                res.cookie('jwt', token);
            }
            return res.redirect('/panel');
        });
    })(req, res);
});

router.get('/close', function (req, res) {
    res.clearCookie('jwt');
    return res.redirect('/');
});

module.exports = router;