const express = require('express');
const restify = require('express-restify-mongoose');
const {Category} = require('../../../models');

const router = express.Router(); // eslint-disable-line new-cap

restify.serve(router, Category,{lean: false});

module.exports = router;