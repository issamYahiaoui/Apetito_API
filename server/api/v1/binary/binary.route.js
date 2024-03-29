const express = require('express');
const restify = require('express-restify-mongoose');
const {Binary} = require('../../../models');

const router = express.Router(); // eslint-disable-line new-cap

restify.serve(router, Binary);

module.exports = router;
