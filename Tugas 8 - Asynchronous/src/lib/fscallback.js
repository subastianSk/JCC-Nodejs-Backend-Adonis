import fs from 'fs';

const path = 'data.json';
export const regisUser = (newData) => {
    fs.readFile(path, (err, data) => {
        if (err) console.log(err);
        let dataArr = JSON.parse(data);
        let indexRegis = dataArr.findIndex((a) => a.name === newData.name);
        if (indexRegis === -1) {
            dataArr.push(newData);
            let stringifiedData = JSON.stringify(dataArr);
            fs.writeFile(path, stringifiedData, (err) => {
                if (err) console.log('Data yang anda inputkan salah!');
                console.log('Berhasil register!');
            });
        } else {
            console.log('Nama sudah digunakan!');
        }
    });
};

export const readData = () => {
    fs.readFile(path, (err, data) => {
        if (err) console.log(err);
        console.log(JSON.parse(data));
    });
};