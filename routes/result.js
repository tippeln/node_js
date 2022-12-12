var express = require('express');
var router = express.Router();
const db = require('../models/index');
const { Op } = require("sequelize");

/* GET users listing. */
router.get('/',(req, res, next)=> {
  db.t_error.findAll().then(usrs => {
    var data = {
      title: '取り込み結果確認画面',
      func:'result',
      username: req.session.username,
      lastdate: req.session.lastdate,
      content: usrs
    }
    res.render('result', data);
  });
});

router.get('/execute', (req, res, next) => {
    var data = {
        title: '登録実行画面',        
        func:'common',
        username: req.session.username,
        lastdate: req.session.lastdate
    }
    res.render('execute', data);
  });

router.get('/errorcheck',(req, res, next)=> {
  const id = 1;
  db.t_error.findAll({
    where: { shorei_no:id},
  }).then(usrs => {
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

module.exports = router;
