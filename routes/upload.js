var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var data = {
      title: 'アップロード',
      username: req.session.username,
      lastdate: req.session.lastdate
  }
  res.render('upload', data);
});

/* GET users listing. */
router.get('/upload_done', function(req, res, next) {
    var data = {
        title: 'アップロード完了',
        username: req.session.username,
        lastdate: req.session.lastdate
    }
    res.render('upload_done', data);
  });

module.exports = router;
