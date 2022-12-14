var express = require('express');
var router = express.Router();
var multer = require("multer");

router.get('/', (req, res) => {

    res.render('import');
    
    });


router.post('/', multer({dest: '/tmp/samplefup/'}).single('file'), function (req, res) {
    // multerが/tmp/samplefup/配下にファイルを作成

    // req.file.pathでmulterが作成したファイルのパスを取得可能
    console.log(req.file.path, req.file.originalname);
    res.end("upload!");
});


module.exports = router;
