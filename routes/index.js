const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({
    success: true,
    message: 'Welcome to movie world! Start your movie adventure!!!'
  });
});

router.get('/error', (req, res, next) => {
  process.exit(1);
});

module.exports = router;
