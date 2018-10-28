var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    }
});

UserSchema.pre('save', async function (next) {
    const user = this;
    const hash = await bcrypt.hash(user.password, 10);
    this.password = hash;
    next();
});

UserSchema.methods.isValidPassword = async function (password) {
    const user = this;

    bcrypt.compare(password, user.password, function (err, result) {
        if (err) {
            return err;
        }
        return result;
    });
}

const UserModel = mongoose.model('accounts', UserSchema);

module.exports = UserModel;