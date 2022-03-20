const fspromise = require('fs/promises');

class Karyawan {
    static async register(req, res) {
        let {
            name,
            password,
            role
        } = {
            ...req.body
        };
        let newUser = {
            name,
            password,
            role,
            isLogin: false
        };
        let readData = await fspromise.readFile('data.json');
        let realData = JSON.parse(readData);
        let updated = {
            ...realData,
            data: [...realData.data, newUser]
        };
        await fspromise.writeFile('data.json', JSON.stringify(updated));
        res.status(201).json({
            message: 'Berhasil register'
        });
    }

    static async karyawan(req, res) {
        let readData = await fspromise.readFile('data.json');
        let realData = JSON.parse(readData);
        res.status(200).json({
            message: 'Berhasil get karyawan',
            data: realData.data,
        });
    }

    static async login(req, res) {
        let readData = await fspromise.readFile('data.json');
        let realData = JSON.parse(readData);
        let {
            name,
            password
        } = {
            ...req.body
        };
        let checkname = realData.data.find((a) => a.name === name);
        let checkpassword = realData.data.find((a) => a.password === password);
        if (checkname && checkpassword) {
            checkname.isLogin = true;
            await fspromise.writeFile('data.json', JSON.stringify(realData));
            res.status(201).json({
                message: 'Berhasil login'
            });
        } else {
            res.status(400).json({
                message: 'Gagal login'
            });
        }
    }

    static async addSiswa(req, res) {
        let readData = await fspromise.readFile('data.json');
        let realData = JSON.parse(readData);
        let trainer = req.params.name.toLowerCase();
        let siswa = req.body;
        let admin = realData.data.find((x) => x.role === "admin");
        let cekLogin = realData.data.reduce((sum, el) => sum + el.isLogin, 0)
        let cariTrainer = realData.data.find(
            (x) => x.name.toLowerCase() === trainer && x.role === 'trainer'
        );
        if (!cariTrainer.students) cariTrainer.students = [];
        cariTrainer.students = [...cariTrainer.students, {
            ...siswa
        }];
        if (admin.isLogin === true) {
            if (cekLogin === 1) {
                await fspromise.writeFile('data.json', JSON.stringify(realData));
                res.status(201).json({
                    message: 'Berhasil add siswa'
                });
            } else {
                res.status(200).json({
                    message: 'Lebih dari 1 user login'
                });
            }
        } else {
            res.status(200).json({
                message: 'Admin harus login!'
            });
        }
    }
}

module.exports = Karyawan;