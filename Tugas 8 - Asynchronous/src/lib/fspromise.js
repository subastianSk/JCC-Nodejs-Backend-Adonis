import fspromise from 'fs/promises';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const path = 'data.json';

export const login = (name, password) => {
    fspromise
        .readFile(path)
        .then((data) => {
            let realData = JSON.parse(data);
            let indexDelete = realData.findIndex((a) => a.name === name && a.password === password);
            if (indexDelete !== -1) {
                realData[indexDelete].isLogin = true;
                console.log("Anda berhasil login");
                return fspromise.writeFile(path, JSON.stringify(realData));
            } else {
                console.log("Nama atau password salah!");
            }
        })
        .then()
        .catch((err) => {
            console.log(err);
        });
};

export const addSiswa = async (siswa, trainer) => {
    let dataRead = await fspromise.readFile(path);
    let realData = JSON.parse(dataRead);
    let indexTrainer = realData.findIndex((a) => a.name == trainer);
    console.log(indexTrainer)
    if (realData[indexTrainer].role === "trainer") {
        if (!realData[indexTrainer].students) {
            realData[indexTrainer].students = [{
                name: siswa
            }];
        } else {
            realData[indexTrainer].students.push({
                name: siswa
            });
        }
        console.log('Berhasil menambah siswa');
    } else {
        console.log(`Tidak ada trainer dengan nama ${trainer}`);
    }
    await fspromise.writeFile(path, JSON.stringify(realData));
};