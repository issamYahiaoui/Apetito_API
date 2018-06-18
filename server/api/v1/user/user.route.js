const express = require('express');
const restify = require('express-restify-mongoose');
const {User} = require('../../../models');

const router = express.Router(); // eslint-disable-line new-cap

restify.serve(router, User);

module.exports = router;