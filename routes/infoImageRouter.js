const express = require('express');
const router = express.Router();
const fs = require('fs');
const InfoModel = require('../models/infoModel')
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

router.post('/info/picture', upload.single('img'), function (req, res) {
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

router.get('/info/album', function (req, res) {
    InfoModel.find()
        .then(images => {
            res.json(images);
        })
        .catch(err => res.json(err))
});

router.get('/info/picture/banner', function (req, res) {
    const id = req.params.id;

    InfoModel.findOne({ strId: 'banner' })
        .then(image => {
            res.contentType(image.img.contentType);
            res.send(image.img.data);
        })
        .catch(err => res.json(err))
});









module.exports = router;