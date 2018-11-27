var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContractSchema = new Schema({
    folio: {
        type: String
    },
    zone: {
        type: String
    },
    total: {
        type: Number
    },
    espacio: {
        type: String
    },
    nombreNegocio: {
        type: String
    },
    telefonoNegocio: {
        type: Number
    },
    cliente: {
        type: String
    },
    meses: {
        type: Number
    },
    direccionNegocio: {
        type: String
    },
    contratista: {
        type: String
    },
    mesInicio: {
        type: String
    },
    active: {
        type: Boolean,
        default: true
    },
    cobrado: {
        type: Number
    },
    anticipo: {
        type: Boolean,
        default: false
    }
});

const ContractModel = mongoose.model('contracts', ContractSchema);

module.exports = ContractModel;