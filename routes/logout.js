var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var data = {
      title: 'logout',
      username: req.session.username,
      lastdate: req.session.lastdate
  }
//  res.render('logout', data);
  req.session.destroy((err) => {
    res.redirect('/login');
  });
});

module.exports = router;