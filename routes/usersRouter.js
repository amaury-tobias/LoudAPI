const express = require('express');
const createError = require('http-errors');
const UserModel = require('../models/usermodel');

const router = express.Router();

router.delete('/user', async function (req, res, next) {
    let id = req.body.id
    try {
        let userDeleted = await UserModel.findOneAndDelete({ _id: id })
        if (userDeleted)
            return res.status(200).json({ message: `Usuario ${userDeleted.name}` });
        else
            next()
    } catch (error) {
        next(error);
    }

});

module.exports = router;