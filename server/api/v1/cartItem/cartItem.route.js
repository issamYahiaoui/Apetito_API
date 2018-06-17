const express = require('express');
const restify = require('express-restify-mongoose');
const {CartItem} = require('../../../models');

const router = express.Router(); // eslint-disable-line new-cap

restify.serve(router, CartItem);

module.exports = router;