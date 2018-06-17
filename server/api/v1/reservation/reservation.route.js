const express = require('express');
const restify = require('express-restify-mongoose');
const {Reservation} = require('../../../models');

const router = express.Router(); // eslint-disable-line new-cap

restify.serve(router, Reservation);

module.exports = router;