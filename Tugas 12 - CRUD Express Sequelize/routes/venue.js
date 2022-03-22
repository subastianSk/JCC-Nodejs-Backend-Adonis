var express = require('express');
const {
    route
} = require('.');
const venueController = require('../controllers/venue');
var router = express.Router();

//Import Controller
const VenueController = require('../controllers/venue');
//Endpoint 1 --> Menyimpan data venue baru yang menangkap data dari request body.
router.post('/', VenueController.store);
/* GET users listing. */
//Endpoint 2 --> Menampilkan seluruh data venue.
router.get('/', VenueController.showAll);

//Endpoint 3 --> Menampilkan data venue dengan id tertentu.
router.get('/:id', VenueController.findId);

//Endpoint 4 --> mengubah data venue dengan id sesuai parameter
router.put('/:id', venueController.update);

//Endpoint 5 --> menghapus data venue dengan id sesuai parameter
router.delete('/:id', venueController.destroy);
module.exports = router;