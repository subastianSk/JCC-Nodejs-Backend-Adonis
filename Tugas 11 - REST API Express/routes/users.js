var express = require('express');
var router = express.Router();

//controller
const UserController = require('../controllers/karyawan');

/* GET users listing. */
router.get('/karyawan', UserController.showAll);

router.get('/test', function (req, res, next) {
    res.send('this is test of other users endpoint');
});

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/karyawan/:name/siswa', UserController.addSiswa);
module.exports = router;