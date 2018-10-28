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
        type: String
    },
    espacio: {
        type: String
    },
    nombreNegocio: {
        type: String
    },
    telefonoNegocio: {
        type: String
    },
    cliente: {
        type: String
    },
    meses: {
        type: String
    },
    direccionNegocio: {
        type: String
    },
    contratista: {
        type: String
    },
    mesInicio: {
        type: String
    }
});

const ContractModel = mongoose.model('contracts', ContractSchema);

module.exports = ContractModel;