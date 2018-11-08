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

    ImageModel.findOneAndDelete({ zone: zone, page: page })
        .then(result => {
            var newPic = new ImageModel();
            ImageModel
            if (result != null) {
                newPic._id = result._id;
            }
            newPic.zone = zone;
            newPic.page = page;
            newPic.img.data = fs.readFileSync(req.file.path);
            newPic.img.contentType = req.file.mimetype;
            newPic.save();
            return res.status(200).json({ id: newPic._id });
        })
        .catch(err => {
            return res.json(err);
        });
});

router.get('/picture/:id', async function (req, res, next) {
    let id = req.params.id;
    try {
        let image = await ImageModel.findById(id);
        res.contentType(image.img.contentType).send(image.img.data);
    } catch (err) {
        next(err);
    }
});

module.exports = router;