var loop = require('./lib/looping.js');

// var loopWhile = loop.loopWhile();
// var loopFor = loop.loopFor();
var args = process.argv;

switch (args[2]) {
    case "while":
        loop.loopWhile();
        break;
    case "for":
        loop.loopFor();
        break;
    case "persegiPanjang":
        var panjang = args[3];
        var lebar = args[4];
        var checkPanjang = Number(panjang);
        var checkLebar = Number(lebar);
        if (panjang === undefined || lebar === undefined || checkPanjang.toString() === "NaN" || checkLebar.toString() === "NaN") {
            console.log("Masukkan nilai panjang dan lebar berupa angka!");
        } else {
            loop.persegiPanjang(panjang, lebar);
        }
        break;
    case "tangga":
        var sisi = args[3];
        var checkNumber = Number(sisi);
        if (sisi === undefined || checkNumber.toString() === "NaN") {
            console.log("Masukkan sisi berupa angka!");
        } else {
            loop.tangga(sisi);
        }
        break;
    case "catur":
        var sisi = args[3];
        var checkNumber = Number(sisi)
        if (sisi === undefined || checkNumber.toString() === "NaN") {
            console.log("Masukkan sisi berupa angka!");
        } else {
            loop.catur(sisi);
        }
        break;
    default:
        console.log(`
        Perintah yang tersedia:
        1. node looping while
        2. node looping for
        3. node looping persegiPanjang <panjang> <lebar>
        4. node looping tangga <sisi>
        5. node looping catur <sisi>
        `)
}