const express = require('express');
const router = express.Router();
const fs = require('fs');
const multer = require('multer');
const ImageModel = require('../models/imageModel');

const upload = multer({ dest: 'uploads/' });

router.get('/profile', function (req, res) {
    res.status(200).json({
        name: req.user.name,
        email: req.user.email,
        role: req.user.role
    });
});

router.get('/close', function (req, res) {
    res.clearCookie('jwt');
    res.redirect('../');
});

router.post('/picture', upload.single('img'), function (req, res) {
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

router.get('/album', function (req, res) {

    ImageModel.find().sort({ zone: 'asc' })
        .then(images => {
            res.json(images);
        })
        .catch(err => res.json(err))
});

router.get('/album/:zone', function (req, res) {
    const zone = req.params.zone;

    ImageModel.find({ zone })
        .then(images => {
            res.json(images);
        })
        .catch(err => res.json(err))
});

router.get('/album/:zone/:page', function (req, res) {
    const zone = req.params.zone;
    const page = req.params.page;

    ImageModel.find({ zone, page })
        .then(images => {
            res.json(images);
        })
        .catch(err => res.json(err))
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

router.get('/xd', function (req, res) {
    ImageModel.find().sort({ page: 'asc' })
        .then(images => {
            res.render('images', { data: images });
        })
        .catch(err => res.json(err))
})
module.exports = router;