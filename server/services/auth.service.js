const passport =require('passport');
const { Strategy , ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local');
const {User} =require('../models')
const config =require('../../config/config');


const localOpts = {
    usernameField: 'username',
};

// Local strategy
const localStrategy = new LocalStrategy(localOpts,  (username, password, done) => {
    try {
        const user = User.findOne({ username })
        .exec()
        .then((user)=>{
            if(!user) {
                return done(null, false);
            } else if(!user.authenticateUser(password)) {
                return done(null, false);
            }
            return done(null, user);
        })
       

       
    } catch (e) {
        return done(e, false);
    }
});

// Jwt strategy
const jwtOpts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: config.jwtSecret,
};

const jwtStrategy = new Strategy(jwtOpts,  (payload, done) => {
    try {
        const user = User.findById(payload._id);

        if(!user) {
            return done(null, false);
        }

        return done(null, user);
    } catch (e) {
        return done(e, false);
    }
})

passport.use(localStrategy);
passport.use(jwtStrategy);

const authJwt = passport.authenticate('jwt', { session: false });
const authLocal = passport.authenticate('local', { session: false });

module.exports = {authJwt , authLocal };