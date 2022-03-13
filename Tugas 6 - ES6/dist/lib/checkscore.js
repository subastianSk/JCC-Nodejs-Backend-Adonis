"use strict";

exports.checkScore = function (str) {
    var nama = str.split(',')[0].split(':')[1];
    var kelas = str.split(',')[1].split(':')[1];
    var skor = str.split(',')[2].split(':')[1];
    return {
        name: nama,
        "class": kelas,
        score: skor
    };
};