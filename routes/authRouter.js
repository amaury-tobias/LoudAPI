const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
var UserModel = require('../models/usermodel');


var router = express.Router();

const cookieMaxAge = 1000 * 60 * 60 * 24 * 10;

router.get('/signup', function (req, res) {
    res.render('signup');
});

router.get('/login', function (req, res) {
    res.render('login');
});

router.post('/signup', function (req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const role = req.body.role;

    UserModel.create({ name, email, password, role })
        .then(user => {
            if (!user) {
                res.status(500).json({ info: 'Error al crear usuario' });
            }

            const body = { _id: user._id, email: user.email };
            const token = jwt.sign({ user: body }, 'GuiaDelLago');
            res.status(201).cookie('jwt', token, { maxAge: cookieMaxAge });
            return res.redirect('../api/profile');
        })
        .catch(err => res.status(400).json({ info: err }));
});

router.post('/login', function (req, res, next) {
    passport.authenticate('login', { session: false }, (err, user, info) => {
        if (err | !user) {
            return res.status(301).json({
                info,
                user: user,
                err
            });
        }
        req.login(user, { session: false }, (err) => {
            if (err) {
                res.send(err);
            }
            const body = { _id: user._id, email: user.email };
            const token = jwt.sign({ user: body }, 'GuiaDelLago');
            res.cookie('jwt', token, { maxAge: cookieMaxAge });
            return res.redirect('../api/profile');
        });
    })(req, res);
});

router.get('/close', function (req, res) {
    res.clearCookie('jwt');
    res.redirect('../');
});

module.exports = router;