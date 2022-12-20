const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  req.session.destroy((err) => {
    res.redirect('/login');
  });
});

module.exports = router;