const express = require('express');
const router = express.Router();
const db = require('../models/index');
const { Op } = require("sequelize");

/* GET home page. */
router.get('/', (req, res, next) => {
    if (req.session.username) {
        res.redirect('/');
      } else {
        res.render('login',{iderr:'　　', pwderr:'　　'});
      }
});

router.post('/post', (req, res, next) => {
    var userid = req.body['userid'] || null;
    var password = req.body['password'] || null;
    console.log('user:' + userid);

    if(!userid || !password) {
      res.statusCode = 403;
      res.render('login',{iderr:'ユーザIDを入力してください。', pwderr:'パスワードを入力してください。'});
    }

    //DB Access
      db.User.findOne({
        where:{
          name:req.body.userid,
          pass:req.body.password,
        }
      }).then(usr=>{
        if (usr != null) {
          req.session.username = usr.name;
          req.session.lastdate = new Date();
          console.log('login ok!')
          res.redirect('/');

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
