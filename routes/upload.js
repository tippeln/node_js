var express = require('express');
var router = express.Router();

var ExcelJS = require('exceljs');
var fileUpload = require('express-fileupload');
var validator = require('validator');
const db = require('../models/index');
const { Op } = require("sequelize");

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

router.post('/', (req, res, next) => {
  try {

      const workbook = new ExcelJS.Workbook();
      const importFile = req.files.importFile;
      const tempFilePath = importFile.tempFilePath;
      const mimeType = importFile.mimetype;
      var reader;

      if(mimeType === 'text/csv') {
          reader = workbook.csv.readFile(tempFilePath);
      } else if(mimeType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
          reader = workbook.xlsx.readFile(tempFilePath);
      }

      reader.then(() => { // インポート

          const worksheet = workbook.getWorksheet(1);
          var data = [];

          //バリデーションチェック
          for(var i = 1; i <= worksheet.rowCount; i++) {

              /*const row = worksheet.getRow(i);
              const name = row.getCell(1).value;
              const email = row.getCell(2).value;
              const password = row.getCell(3).value;

              if(validator.isEmpty(name) || validator.isEmpty(password) || !validator.isEmail(email)) {

                  throw new Error('データが不完全なため処理できませんでした。');

              }*/

              data.push({
                  senmon: senmon,
                  nendo: nendo,
                  createdAt: new Date(),
                  updatedAt: new Date()
              });
          }
          if_shorei_csv.bulkCreate(data);
          res.json({ result: true });
      })
      .catch(error => {
          return res.status(400).send(error.message);
      });

  } catch(error) {
      return res.status(400).send(error.message);
  }

});

/* POST users listing.
router.post('/', (req, res, next)　=>  {
  var data = {
      title: 'アップロード完了',
      func:'upload',
      username: req.session.username,
      lastdate: req.session.lastdate
  }
  res.render('upload_done', data);
}); */

module.exports = router;
