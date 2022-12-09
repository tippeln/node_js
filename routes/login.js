const express = require('express');
const router = express.Router();
const db = require('../models/index');
const { Op } = require("sequelize");
const bcrypt = require('bcrypt');

/* GET */
router.get('/', (req, res, next) => {
    if (req.session.username) {
        res.redirect('/');
      } else {
          var data = {
            title: 'ログイン',
            func:'login',
            username: '',
            lastdate: '',
            errmsg:'',
            userid: ''
          }
          res.render('login', data);       
      }
});

/* Psot */
router.post('/', (req, res, next) => {
    //フォーム情報取得
    var userid = req.body.userid || null;
    var password = req.body.password || null;

    if(!userid || !password) {
      wrongForm(req, res, userid);      
    }
    //ユーザーマスタ検索
      db.m_user.findOne({
        where:{user_id:req.body.userid}
      }).then(usr=>{
        if (usr != null) {
            //パスワードチェック
            if(bcrypt.compareSync(req.body.password, usr.pwd)) {
                //セッション情報の保存
                req.session.username = usr.user_nm;
                const date = new Date();
                req.session.lastdate = date.toLocaleString();

                //最終ログオン日時の更新
                db.m_user.update({
                  last_logon_datetime:date
                },
                {
                  where:{user_id:req.body.userid}
                })
                res.redirect('/');
            } else {
              wrongForm(req, res, userid);          
            }
        } else {
          wrongForm(req, res, userid);
        }
      })
    });

    function wrongForm(req, res, userid) {
        var data = {
          title: 'ログイン',
          func:'login',
          username: '',
          lastdate: '',
          errmsg:'ユーザIDかパスワードに問題があります。再度入力下さい。',
          userid: userid
        }
        res.statusCode = 403;
        res.render('login', data);     
    }

module.exports = router;
