const express = require('express');
const router = express.Router();
const ContractModel = require('../models/contractModel');
const LogModel = require('../models/logModel');

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
            LogModel.create({ username: req.user.name, description: `Contrato ${contract.nombreNegocio}` });
            return res.status(200).redirect('/panel');
        })
        .catch(err => {
            next(err);
        });
});

router.post('/contrato/update', async function (req, res, next) {
    let id = req.body.cId;
    let status = req.body.cCancel != 0 ? false : true;
    let anticipo = req.body.cBonus != 0 ? true : false;
    var cobrar = parseInt(req.body.cPay != 0 ? req.body.cPay : 0);
    try {
        let oldContract = await ContractModel.findById(id);
        cobrar += oldContract.cobrado;
        let updatedContract = await ContractModel.findByIdAndUpdate(id, { active: status, anticipo: anticipo, cobrado: cobrar });
        LogModel.create({ username: req.user.name, description: `Contrato ${updatedContract.nombreNegocio} actualizado` });
        return res.status(200).redirect('/panel');
    } catch (error) {
        next();
    }
});

module.exports = router;