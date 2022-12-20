const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload_file = multer({ dest: 'uploads/' });

router.post('/', upload_file.single('avatar'), function (req, res, next) {
    if (req.file) {
        console.log('Image uploaded!');
      }
      else {
        console.log('Image can not uploaded!')
      }
    res.render('import');
});


router.get('/', (req, res) => {

    res.render('import');
    
    });


    
/*router.post('/', function(req, res) {
    upload(req, res, function(err) {
        if(err) {
        console.log(err);
        res.send("Failed to write ");
        } else {
        res.send("uploaded ");
        }
    });
    });*/

/*router.post('/',  (req, res) => {
    // multerが/tmp/samplefup/配下にファイルを作成
    multer({dest: path.join(__dirname, 'public/tmp')}).single('file');
    // req.file.pathでmulterが作成したファイルのパスを取得可能
 //   console.log(req.file.path, req.file.originalname);
 var data = {
    title: 'アップロード完了',
    func:'upload',
    username: req.session.username,
    lastdate: req.session.lastdate
}
res.render('upload_done', data);
});*/


module.exports = router;
