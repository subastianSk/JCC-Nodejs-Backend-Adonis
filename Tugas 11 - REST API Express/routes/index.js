var express = require('express');
var router = express.Router();
const karyawan = require('../controllers/karyawan')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.post('/register', karyawan.register);
router.post('/login', karyawan.login);
router.get('/karyawan', karyawan.karyawan);
router.post('/karyawan/:name/siswa', karyawan.addSiswa)


module.exports = router;