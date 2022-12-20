const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  var data = {
      title: 'メニュー',
      func:'index',
      username: req.session.username,
      lastdate: req.session.lastdate
  }
  res.render('index', data);
});

module.exports = router;
