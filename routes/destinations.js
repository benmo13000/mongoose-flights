const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

// POST /flights/:id/reviews (create review for a flight)
router.post('/flights/:id/destinations', destinationsCtrl.create);

module.exports = router;