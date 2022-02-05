const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movie');

router.get('/', movieController.listMovie);
router.get('/add', movieController.addMovie);

module.exports = router;
