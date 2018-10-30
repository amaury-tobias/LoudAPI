const express = require('express');
const router = express.Router();
const ImageModel = require('../models/imageModel');

router.get('/', function (req, res, next) {  
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
      res.render('index', { zones: [zone1, zone2, zone3] });
    })
    .catch(err => res.json(err))
});

module.exports = router;