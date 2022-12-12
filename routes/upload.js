var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  var data = {
      title: 'アップロード',
      func:'upload',
      username: req.session.username,
      lastdate: req.session.lastdate
  }
  res.render('upload', data);
});

/* POST users listing. */
router.post('/', (req, res, next)　=>  {
  var data = {
      title: 'アップロード完了',
      func:'upload',
      username: req.session.username,
      lastdate: req.session.lastdate
  }
  res.render('upload_done', data);
});

module.exports = router;
