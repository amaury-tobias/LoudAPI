const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var tokenSchema = new Schema({
    mail: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
});

const TokenModel = mongoose.model('tokens', tokenSchema);

module.exports = TokenModel;