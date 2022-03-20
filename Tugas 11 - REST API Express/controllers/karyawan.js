const fs = require('fs')

class UserController {
    //Realease 0
    static register(req, res) {
        fs.readFile('data.json', (err, data) => {
            if (err) {
                res.status(400).json({
                    "errors": "error membaca data"
                })
            } else {
                let allreadyData = JSON.parse(data)
                let {
                    users
                } = allreadyData
                let dataLogin = {
                    isLogin: false
                }
                let {
                    isLogin
                } = dataLogin
                let {
                    name,
                    password,
                    role
                } = req.body
                let count = 0;
                if (role == "admin") {
                    let i;
                    for (i = 0; i < users.length; i++) {
                        if (users[i].role == "admin") {
                            count++;
                        }
                    }
                }
                console.log(allreadyData)
                if (count == 0) {
                    let newUsers = {
                        name,
                        password,
                        role,
                        isLogin
                    }
                    users.push(newUsers)
                    let newData = {
                        ...allreadyData,
                        users
                    }
                    fs.writeFile('data.json', JSON.stringify(newData), (err) => {
                        if (err) {
                            res.status(400).json({
                                "errors": "error menyimpan data"
                            })
                        } else {
                            res.status(201).json({
                                message: "Berhasil register"
                            })
                        }
                    })
                    // res.send({
                    //     "message": "Berhasil register"
                    // });
                } else {
                    res.send({
                        "message": "Role admin telah terdaftar"
                    });
                }
            }
        })
    }

    //Release 1
    static showAll(req, res) {
        fs.readFile('data.json', (err, data) => {
            if (err) {
                res.status(400).json({
                    "errors": "error membaca data"
                })
            } else {
                let realData = JSON.parse(data)
                res.status(200).json({
                    "message": "Berhasil get data users",
                    data: realData.users
                })
            }
        })
    }

    //Release 2
    static login(req, res) {
        fs.readFile('data.json', (err, data) => {
            if (err) {
                res.status(400).json({
                    "message": "Tidak berhasil login"
                })
            } else {
                let allreadyData = JSON.parse(data)
                let {
                    users
                } = allreadyData
                let {
                    name,
                    password
                } = req.body
                let index = users.findIndex(item => item.name == name)
                let i, count = 0;
                for (i = 0; i < users.length; i++) {
                    if (users[i].isLogin == true) {
                        count++;
                    }
                }
                if (count == 0) {
                    if (index !== -1) {
                        if (users[index].name == name && users[index].password == password) {
                            users[index].isLogin = true;
                        } else {
                            res.status(400).json({
                                "message": "Password salah"
                            })
                        }
                    } else {
                        res.status(400).json({
                            "message": "Data tidak ditemukan"
                        })
                    }
                    let newData = {
                        ...allreadyData,
                        users
                    }
                    fs.writeFile('data.json', JSON.stringify(newData), (err) => {
                        if (err) {
                            res.status(400).json({
                                "errors": "error menyimpan data"
                            })
                        } else {
                            res.status(201).json({
                                "message": "Berhasil Login"
                            })
                        }
                    })
                } else {
                    res.send({
                        "message": "Ada akun yang telah login"
                    });
                }
            }
        })
    }

    static addSiswa(req, res) {
        fs.readFile('data.json', (err, data) => {
            if (err) {
                res.status(400).json({
                    "message": "Tidak berhasil menambahkan siswa"
                })
            } else {
                let allreadyData = JSON.parse(data)
                let {
                    users
                } = allreadyData
                let {
                    name,
                    kelas
                } = req.body
                let trainerName = req.params.name
                let indexAdmin = users.findIndex(items => items.isLogin == true && items.role == "admin")
                let index = users.findIndex(item => item.name == trainerName)
                if (indexAdmin !== -1) {
                    if (index !== -1) {
                        if (users[index]["students"] == undefined) {
                            users[index]["students"] = []
                        }
                        users[index].students.push({
                            name,
                            kelas
                        })
                    } else {
                        res.status(400).json({
                            "message": "Data tidak ditemukan"
                        })
                    }
                } else {
                    res.status(400).json({
                        "message": "admin perlu login"
                    })
                }
                let newData = {
                    ...allreadyData,
                    users
                }
                fs.writeFile('data.json', JSON.stringify(newData), (err) => {
                    if (err) {
                        res.status(400).json({
                            "errors": "error menyimpan data"
                        })
                    } else {
                        res.status(201).json({
                            "message": "Berhasil add siswa"
                        })
                    }
                })
            }
        })
    }
}

module.exports = UserController