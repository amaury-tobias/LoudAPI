const mongoose = require('mongoose');
const moment = require('moment');
const Schema = mongoose.Schema;

var logSchema = new Schema({
    fecha: {
        type: String
    },
    username: {
        type: String
    },
    description: {
        type: String
    }
});


logSchema.pre('save', async function (next) {
    const item = this;
    item.fecha = moment().format('lll');
    next();
})

const LogModel = mongoose.model('log', logSchema);

module.exports = LogModel;