var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var data = {
      title: 'メニュー',
      username: req.session.username,
      lastdate: req.session.lastdate
  }
  res.render('index', data);
});

module.exports = router;
