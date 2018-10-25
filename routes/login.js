var express = require('express');
var router = express.Router();

router.get('/login', function (req, res, next) {
    res.json({
        status: 200,
        message: 'login'
    })
});

router.post('/login', function (req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
