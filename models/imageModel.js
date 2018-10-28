var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var imageSchema = new Schema({
    zone: {
        type: String
    },
    page: {
        type: Number
    },
    img: {
        data: Buffer, contentType: String
    }
});

const ImageModel = mongoose.model('images', imageSchema);

module.exports = ImageModel;