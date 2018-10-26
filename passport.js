var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var UserModel = require('./models/usermodel');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use('signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, function (email, password, done) {
    UserModel.create({ email, password })
        .then(user => {
            if (!user) {
                done(null, false, { message: '500 Error al crear usuario' });
            }
            return done(null, user, { message: 'Usuario Registrado' });
        })
        .catch(err => done(err));
}));

passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, function (email, password, done) {
    return UserModel.findOne({ email })
        .then(user => {
            if (!user) {
                return done(null, false, { message: 'Nombre de Usuario Incorrecto' });
            }
            user.isValidPassword(password)
                .then(valid => {
                    if (!valid) {
                        done(null, false, { message: 'Contraseña Incorrecta' });
                    }
                    done(null, user, { message: 'Login Correcto' });
                })
                .catch(err => new Error('500 error bcrypt'));
        })
        .catch(err => done(err));
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
}, function (jwtPayload, done) {
    return UserModel.findOne({ _id: jwtPayload.user._id })
        .then(user => {
            return done(null, jwtPayload.user);
        })
        .catch(err => done(err));
}))