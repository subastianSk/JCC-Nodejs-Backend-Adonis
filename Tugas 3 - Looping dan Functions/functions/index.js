var fungsi = require('./lib/func.js');

var teriak = fungsi.teriak;
var kalikan = fungsi.kalikan;
var kenalan = fungsi.kenalan;

var args = process.argv;



switch (args[2]) {
    case "teriak":
        console.log(teriak());
        break;
    case "kalikan":
        var num1 = args[3];
        var num2 = args[4];
        var checkNum1 = Number(num1);
        var checkNum2 = Number(num2);
        if (num1 === undefined || num2 === undefined || checkNum1.toString() === "NaN" || checkNum2.toString() === "NaN") {
            console.log("Masukkan angka pertama dan kedua yang ingin dikalikan");
        } else {
            console.log(kalikan(num1, num2));
        }
        break;
    case "kenalan":
        var nama = args[3];
        var age = args[4];
        var hobby = args[5]
        var checkAge = Number(age)
        if (nama === undefined || age === undefined || hobby === undefined || checkAge.toString() === "NaN") {
            console.log("Masukkan nama, umur, dan hobby");
        } else {
            console.log(kenalan(nama, age, hobby));

        }
        break;
    default:
        console.log(`
            Berikut fungsi yang tersedia:
            1. node functions teriak
            2. node functions kalikan <number1> <number2>
            3. node functions kenalan <nama> <age> <hobby>
        `);
}