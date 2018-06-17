const express = require('express');
const restify = require('express-restify-mongoose');
const {Dish} = require('../../../models');

const router = express.Router(); // eslint-disable-line new-cap

restify.serve(router, Dish);

module.exports = router;