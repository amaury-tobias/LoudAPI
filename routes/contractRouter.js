const express = require('express');
const router = express.Router();
const ContractModel = require('../models/contractModel');

router.get('/contratos', function (req, res) {
    ContractModel.find({})
        .then(rs => {
            res.json(rs);
        })
        .catch(err => {
            res.json(err)
        });
});

router.post('/contrato', function (req, res) {
    const newContract = {
        folio: req.body.folio,
        zone: req.body.zone,
        total: req.body.total,
        espacio: req.body.espacio,
        nombreNegocio: req.body.nombreNegocio,
        telefonoNegocio: req.body.telefonoNegocio,
        cliente: req.body.cliente,
        meses: req.body.meses,
        direccionNegocio: req.body.direccionNegocio,
        contratista: req.body.contratista,
        mesInicio: req.body.mesInicio
    }

    ContractModel.create(newContract)
        .then(contract => {
            res.json(contract);
        })
        .catch(err => {
            res.json(err);
        });
})

module.exports = router;