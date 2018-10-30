const express = require('express');
const router = express.Router();
const fs = require('fs');
const InfoModel = require('../models/infoModel')
const multer = require('multer');

const passport = require('passport');

const upload = multer({ dest: 'uploads/' });

router.post('/info/picture', passport.authenticate('jwt', { session: false }), upload.single('img'), function (req, res) {
    const strId = req.body.strId;

    InfoModel.findOneAndDelete({ strId: strId })
        .then(result => {
            var newPic = new InfoModel();
            if (result != null) {
                newPic._id = result._id;
            }
            newPic.img.contentType = req.file.mimetype;
            newPic.img.data = fs.readFileSync(req.file.path);
            newPic.strId = strId;
            newPic.save();
            res.json(newPic._id);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get('/info/picture/:id', function (req, res) {
    const id = req.params.id;
    InfoModel.findOne({ strId: id })
        .then(image => {
            res.contentType(image.img.contentType);
            res.send(image.img.data);
        })
        .catch(err => res.json(err))
});









module.exports = router;