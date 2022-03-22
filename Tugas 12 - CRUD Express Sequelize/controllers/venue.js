//Import model
const {
    Venue
} = require("../models")
class venueController {
    static async showAll(req, res) {
        try {
            let realData = await Venue.findAll();
            res.status(200).json({
                status: 'Success',
                data: realData
            })
        } catch (error) {
            res.status(401).json({
                error: error
            })
        }
    }

    static async store(req, res) {
        //tangkap data melalui req
        let name = req.body.name;
        let address = req.body.address;
        let phone = req.body.phone;
        //simpan data menggunakan id
        let newVenue = Venue.build({
            name,
            address,
            phone
        });
        console.log(newVenue instanceof Venue);
        await newVenue.save()
        res.status(200).json({
            status: 'Success',
            message: "Data berhasil disimpan"
        })
    }

    static async findId(req, res) {
        let id = req.params.id;
        // let value = await Venue.findAll({
        //     where: {
        //         id: id
        //     }
        //     limit: 1;
        // })
        let value = await Venue.findByPk(id);

        res.status(200).json({
            status: 'succes',
            data: value
        })
    }

    static async update(req, res) {
        let name = req.body.name;
        let address = req.body.address;
        let phone = req.body.phone;
        let query = await Venue.update({
            name: name,
            address: address,
            phone: phone
        }, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            status: 'succes',
            data: "updated"
        })
    }

    static async destroy(req, res) {
        await Venue.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            status: 'succes',
            data: "deleted"
        })
    }

}

module.exports = venueController;