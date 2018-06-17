const express = require('express');
const restify = require('express-restify-mongoose');
const {Restaurant} = require('../../../models');

const router = express.Router(); // eslint-disable-line new-cap

restify.serve(router, Restaurant);

module.exports = router;