const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload_file = multer({ dest: 'uploads/' });
// const fs = require('fs');
// const validator = require('validator');
// const db = require('../models/index');
// const { Op } = require("sequelize");
// const bodyParser  = require('body-parser');  


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
router.post('/upload_done', upload_file.single('csvfile'),  (req, res, next) => {
  if (req.file) {
      console.log('Image uploaded!');
      console.log(req.file);

    }
    else {
      console.log('Image can not uploaded!')
    }

    var data = {
        title: 'アップロード完了',
        func:'upload',
        username: req.session.username,
        lastdate: req.session.lastdate
    }
    res.render('upload_done', data);
});

module.exports = router;
