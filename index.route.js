const express = require('express');

const apiV1Routes = require('./server/api/v1/index.route');


const router = express.Router(); // eslint-disable-line new-cap

// TODO: use glob to match *.route files

/** GET /health-check - Check service health */
router.get('/api/v1/health-check', (req, res) =>
  res.send('OK')
);


// mount apiV1 routes at /
Object.keys(apiV1Routes).map(function(key, index) {
  router.use('/',apiV1Routes[key])
});

module.exports = router;
