var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContractSchema = new Schema({
    folio
});

ContractSchema.pre('save', async function (next) {
    const user = this;
    const hash = await bcrypt.hash(user.password, 10);
    this.password = hash;
    next();
});

ContractSchema.methods.isValidPassword = async function (password) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
    return compare;
}

const ContractModel = mongoose.model('contracts', ContractSchema);

module.exports = ContractModel;