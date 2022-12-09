var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var data = {
      title: '取り込み結果確認画面',      
      func:'common',
      username: req.session.username,
      lastdate: req.session.lastdate
  }
  res.render('result', data);
});

/* GET users listing. */
router.get('/execute', function(req, res, next) {
    var data = {
        title: '登録実行画面',        
        func:'common',
        username: req.session.username,
        lastdate: req.session.lastdate
    }
    res.render('execute', data);
  });

  /* GET users listing. */
router.get('/errorcheck', function(req, res, next) {
    var data = {
        title: 'エラー確認画面',
        func:'errorcheck',
        username: req.session.username,
        lastdate: req.session.lastdate
    }
    res.render('errorcheck', data);
  });
module.exports = router;
