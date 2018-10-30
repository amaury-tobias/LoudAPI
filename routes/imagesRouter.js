const express = require('express');
const router = express.Router();
const fs = require('fs');
const multer = require('multer');
const ImageModel = require('../models/imageModel');
const passport = require('passport');

const upload = multer({ dest: 'uploads/' });

router.post('/picture', passport.authenticate('jwt', { session: false }), upload.single('img'), function (req, res) {
    const zone = req.body.zone
    const page = req.body.page

    var newPic = new ImageModel();
    newPic.zone = zone;
    newPic.page = page;
    newPic.img.data = fs.readFileSync(req.file.path);
    newPic.img.contentType = req.file.mimetype;
    newPic.save();

    res.status(200).json({ id: newPic._id });

});

router.get('/picture/:id', function (req, res) {
    const id = req.params.id;


    ImageModel.findById(id)
        .then(image => {
            res.contentType(image.img.contentType);
            res.send(image.img.data);
        })
        .catch(err => res.json(err))
});

module.exports = router;