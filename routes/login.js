var express = require('express');
var router = express.Router();

router.get('/signin', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/signin', function (req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
