const express = require('express');
const router = express.Router();
const fs = require('fs');
const InfoModel = require('../models/infoModel')
const multer = require('multer');

const passport = require('passport');

const upload = multer({ dest: 'uploads/' });

router.post('/info/picture',
    passport.authenticate('jwt', { session: false }),
    upload.single('sInfo'), function (req, res, next) {

        const strId = req.body.option;

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
                return res.status(200).redirect('/panel');
            })
            .catch(err => {
                console.log(err);
                return next(err)
            });
    });

router.get('/info/picture/:id', async function (req, res, next) {
    let id = req.params.id;
    try {
        let image = await InfoModel.findOne({ strId: id });
        res.contentType(image.img.contentType).send(image.img.data);
    } catch (err) {
        next(err);
    }
});









module.exports = router;