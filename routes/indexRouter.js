const express = require('express');
const router = express.Router();
const ImageModel = require('../models/imageModel');
const passport = require('passport');

router.get('/', function (req, res, next) {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {

    ImageModel.find().sort({ zone: 1, page: 1 })
      .then(images => {
        var zone1 = [], zone2 = [], zone3 = [];
        images.forEach(result => {
          switch (result.zone) {
            case '1':
              zone1.push(result);
              break;
            case '2':
              zone2.push(result);
              break;
            case '3':
              zone3.push(result);
              break;
          }
        });
        if (err | !user) {
          return res.render('index', { zones: [zone1, zone2, zone3] });
        }
        req.login(user, { session: false }, (err) => {
          if (err) {
            return res.send(err);
          }
          return res.render('index', { zones: [zone1, zone2, zone3], user: user });
        });
      })
      .catch(err => res.json(err))
  })(req, res)
});

router.get('/panel', passport.authenticate('jwt', { session: false }), function (req, res, next) {
  return res.render('panel');
});

module.exports = router;