var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
const validator =require('validator');
const { hashSync, compareSync } =require('bcrypt-nodejs');
const jwt =require('jsonwebtoken');
const config = require('../../config/config')


var UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required!'],
        trim: true,
        validate: {
            validator(email) {
                return validator.isEmail(email);
            },
            message: '{VALUE} is not a valid email!',
        },
    },
  username: {
        type: String,
        unique: true,
        required: true
    },
  password: {
        type: String,
        required: true
    }
});

UserSchema.pre('save', function(next) {
    if (this.isModified('password')) {
        this.password = this._hashPassword(this.password);
    }

    return next();
});
UserSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

UserSchema.methods.toAuthJSON = function() {
    return {
        _id: this._id,
        userName: this.userName,
        token: `JWT ${this.createToken()}`,
    };
},
UserSchema.methods._hashPassword = function(password) {
    return hashSync(password);
},
UserSchema.methods.authenticateUser = function(password) {
    return compareSync(password, this.password);
},
UserSchema.methods.createToken = function() {
    return jwt.sign(
        {
            _id: this._id,
        },
        config.jwtSecret
    );
},

module.exports = mongoose.model('User', UserSchema);