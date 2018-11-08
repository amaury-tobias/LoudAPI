var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var UserModel = require('./models/usermodel');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use('login', new LocalStrategy({ usernameField: 'email', passwordField: 'password' },
    async function (email, password, done) {
        try {
            const user = await UserModel.findOne({ $or: [{ email: email }, { name: email }] });
            if (!user) {
                done(null, false, 'Nombre de Usuario Incorrecto');
            }
            else {
                let valid = await user.isValidPassword(password);
                done(null, valid ? user : false, valid ? 'Login' : 'Contraseña Incorrecta');
            }
        }
        catch (err) {
            return done(err);
        }
    }))

var cookieExtractor = function (req) {
    var token = null;
    if (req && req.cookies) {
        token = req.cookies['jwt'];
    }
    return token;
};

passport.use(new JWTStrategy({
    secretOrKey: 'GuiaDelLago',
    jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor])
}, async function (jwtPayload, done) {
    try {
        const user = await UserModel.findOne({ _id: jwtPayload.user._id });
        return done(null, user);
    }
    catch (err) {
        return done(err);
    }
}))