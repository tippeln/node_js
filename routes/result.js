var express = require('express');
var router = express.Router();
const db = require('../models/index');
const { Op } = require("sequelize");

/* GET users listing. */
router.get('/', function(req, res, next) {
  var data = {
      title: '取り込み結果確認画面',      
      func:'result',
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
/*router.get('/errorcheck', function(req, res, next) {
  const no = "備考欄です。" ;

  db.t_error.findAll({
    where:{biko: no}
  }).then(usrs =>{
    console.log('row_no???:'+ usrs.row_no)
    var data = {
        title: 'エラー確認画面',
        func:'errorcheck',
        username: req.session.username,
        lastdate: req.session.lastdate,
        no:usrs.row_no
    }
    res.render('errorcheck', data);
  })
});*/

router.get('/errorcheck',(req, res, next)=> {
  db.t_error.findAll().then(usrs => {
    var data = {
      title: 'エラー確認画面',
      func:'errorcheck',
      username: req.session.username,
      lastdate: req.session.lastdate,
      content: usrs
    }
    res.render('errorcheck', data);
  });
});
  /*router.get('/errorcheck', function(req, res, next) {
    var data = {
        title: 'エラー確認画面',
        func:'errorcheck',
        username: req.session.username,
        lastdate: req.session.lastdate
    }
    res.render('errorcheck', data);
  });*/

module.exports = router;
