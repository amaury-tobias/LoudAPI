const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

var router = express.Router();

router.post('/signup', passport.authenticate('signup', { session: false }), function (req, res, next) {
    res.json({
        message: 'Registro Correcto',
        user: req.user
    });
});

router.post('/login', function (req, res, next) {
    passport.authenticate('login', { session: false }, (err, user, info) => {
        if (err | !user) {
            return res.status(301).json({
                message: info,
                user: user
            });
        }
        req.login(user, { session: false }, (err) => {
            if (err) {
                res.send(err);
            }
            const body = { _id: user._id, email: user.email };
            const token = jwt.sign({ user: body }, 'GuiaDelLago');
            res.cookie('jwt', token, { expires: new Date(Date.now + 900000) });
            return res.json({ token });
        });
    })(req, res);
});

module.exports = router;