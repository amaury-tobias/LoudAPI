var express = require('express');
var router = express.Router();

router.get('/profile', function (req, res) {
    res.render('profile', { user: req.user })
});

router.get('/close', function (req, res) {
    res.clearCookie('jwt');
    res.redirect('../');
});


module.exports = router;