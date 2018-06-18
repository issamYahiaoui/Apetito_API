
const express = require('express');


const  {authService}= require('../../../services');
const authController= require('./auth.controller');


const router= new express.Router();

router.post('/api/v1/login', authService.authLocal, authController.login);

module.exports = router;