const express = require('express');
const router = express.Router();
const ContractModel = require('../models/contractModel');


router.get('/contratos', function (req, res, next) {
    ContractModel.find({})
        .then(rs => {
            return res.status(200).json(rs);
        })
        .catch(err => {
            next(err)
        });
});

router.post('/contrato', function (req, res, next) {
    const newContract = {
        folio: req.body.pNumber,
        zone: req.body.zone,
        total: req.body.total,
        espacio: req.body.space,
        nombreNegocio: req.body.buisness,
        telefonoNegocio: req.body.tel,
        cliente: req.body.client,
        meses: req.body.mNumber,
        direccionNegocio: req.body.dir,
        contratista: req.body.seller,
        mesInicio: req.body.iMonth
    }

    ContractModel.create(newContract)
        .then(contract => {
            return res.status(200).redirect('/panel');
        })
        .catch(err => {
            next(err);
        });
})

module.exports = router;