var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    if (req.session.username) {
        res.redirect('/');
      } else {
        res.render('login',{iderr:'　　', pwderr:'　　'});
      }
});

router.post('/post', (req, res, next) => {
    var userid = req.body['userid'];
    var password = req.body['password'];
    console.log('user:' + userid);

    if (userid === 'admin' && password === 'a') {
      req.session.regenerate((err) => {
        req.session.username = 'ログイン成功した人';
        req.session.lastdate = new Date();
        console.log('adminでログイン')
        res.redirect('/');
      });
    } else if (userid === 'admin' && password != 'a')  {
      res.render('login',{iderr:'　　', pwderr:'パスワードが不正です。'});

    } else if (userid != 'admin' && password === 'a')  {
      res.render('login',{iderr:'ユーザIDが不正です。', pwderr:'　　'});
    } else {
      res.render('login',{iderr:'ユーザIDが不正です。', pwderr:'パスワードが不正です。'});
    }
   
  });

  
module.exports = router;