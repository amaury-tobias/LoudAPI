const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var infoSchema = new Schema({
    strId: {
        type: String,
        required: true
    },
    img: {
        data: Buffer, contentType: String
    }
});

const InfoModel = mongoose.model('infoImages', infoSchema);

module.exports = InfoModel;