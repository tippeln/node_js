var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  req.session.destroy((err) => {
    res.redirect('/login');
  });
});

module.exports = router;