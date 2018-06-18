const  HTTPStatus =require('http-status');



const login = function(req, res, next) {
    res.json(req.user.toAuthJSON());
    return next();
}

module.exports = { login }