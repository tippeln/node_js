const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload_file = multer({ dest: 'uploads/' });
// const fs = require('fs');
// const validator = require('validator');
const db = require('../models/index');
const { Op } = require("sequelize");
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

    //フォーム情報取得
    var senmon = req.body.senmon || null;
    var syubetsu = req.body.syubetsu || null;
    console.log(senmon);
    console.log(syubetsu);

    db.if_shorei_csv.create({
      // shorei_no: 1,
      // senmon: senmon,
      createdAt: new Date(),
      updatedAt: new Date()
    }).then(user => {
    
      //
    
    });





    var data = {
        title: 'アップロード完了',
        func:'upload',
        username: req.session.username,
        lastdate: req.session.lastdate
    }
    res.render('upload_done', data);
});

module.exports = router;
