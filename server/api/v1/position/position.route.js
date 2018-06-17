const express = require('express');
const restify = require('express-restify-mongoose');
const {Position} = require('../../../models');

const router = express.Router(); // eslint-disable-line new-cap

restify.serve(router, Position);

module.exports = router;