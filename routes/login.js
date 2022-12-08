const express = require('express');
const router = express.Router();
const db = require('../models/index');
const { Op } = require("sequelize");
const bcrypt = require('bcrypt');

/* GET home page. */
router.get('/', (req, res, next) => {
    if (req.session.username) {
        res.redirect('/');
      } else {
        res.render('login',{iderr:'　　', pwderr:'　　'});
      }
});

router.post('/', (req, res, next) => {
    var userid = req.body.userid || null;
    var password = req.body.password || null;
    console.log('user:' + userid);

    if(!userid || !password) {
      res.statusCode = 403;
      res.render('login',{iderr:'ユーザIDを入力してください。', pwderr:'パスワードを入力してください。'});
    }
    //ユーザーマスタ検索
      db.m_user.findOne({
        where:{user_id:req.body.userid}
      }).then(usr=>{
        if (usr != null) {
          if(bcrypt.compareSync(req.body.password, usr.pwd)) {
            req.session.username = usr.user_nm;
            const date = new Date();
            req.session.lastdate = date.toLocaleString();
            console.log('login ok!');
            //最終ログオン日時の更新
            db.m_user.update({
              last_logon_datetime:date
            },
            {
              where:{user_id:req.body.userid}
            })
            res.redirect('/');
          }
        } else {
          var data = {
            iderr:'ユーザIDかパスワードに問題があります。再度入力下さい。',
            pwderr:'　　'
          }
          res.statusCode = 403;
          res.render('login', data);
        }
      })
    });
    module.exports = router;





 /*   db.User.findOne({
      where: {
          name:{[Op.eq]:req.body.userid},
          pass:{[Op.eq]:req.body.password}
      }
    }).success(usrs => {
        req.session.username = 'usrs';
        req.session.lastdate = new Date();
        console.log('login ok!')
        res.redirect('/');
    }) 
    .error(usrs => {
      res.statusCode = 403;
      console.log('login NG!')
      res.redirect('/login');
    }); 
});*/
