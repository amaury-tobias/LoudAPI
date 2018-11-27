const express = require('express');
const router = express.Router();
const fs = require('fs');
const multer = require('multer');
const ImageModel = require('../models/imageModel');
const passport = require('passport');

const storage = multer.memoryStorage();
const upload = multer(storage);

router.get('/pictures/:magazine', async function (req, res, next) {
    const magazine = req.params.magazine;
    try {
        let images = await ImageModel.find({ zone: magazine }, '_id');
        return res.status(200).json(images);
    } catch (err) {
        next(err);
    }
});

router.post('/pictures', passport.authenticate('jwt', { session: false }), upload.any(), async function (req, res, next) {
    const zone = req.body.zone;
    const zoneName = req.body.sMagName;
    try {
        let result = await ImageModel.deleteMany({ zone });
        if (result) {
            var page = 1;
            req.files.forEach(element => {
                var newPic = new ImageModel();
                newPic.zone = zone;
                newPic.page = page;
                newPic.img.data = element.buffer;
                newPic.img.contentType = element.mimetype;
                newPic.save();
                page ++;
            });
            res.status(200).render('panel');
        }
    } catch (error) {
        next(error);
    }
});

router.get('/picture/:id', async function (req, res, next) {
    let id = req.params.id;
    try {
        let image = await ImageModel.findById(id);
        return res.contentType(image.img.contentType).send(image.img.data);
    } catch (err) {
        next(err);
    }
});

module.exports = router;