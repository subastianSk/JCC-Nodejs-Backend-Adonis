// Soal No.4 Mengurai Kalimat dan Menentukan Panjang String
// var sentence3 = 'wow JavaScript is so cool';

// var exampleFirstWord3 = sentence3.substring(0, 3);
// var secondWord3; // do your own! 
// var thirdWord3; // do your own! 
// var fourthWord3; // do your own! 
// var fifthWord3; // do your own! 

// var firstWordLength = exampleFirstWord3.length
// lanjutkan buat variable lagi di bawah ini 
// console.log('First Word: ' + exampleFirstWord3 + ', with length: ' + firstWordLength);
// console.log('Second Word: ' + secondWord3);
// console.log('Third Word: ' + thirdWord3);
// console.log('Fourth Word: ' + fourthWord3);
// console.log('Fifth Word: ' + fifthWord3);
// Output:
//     First Word: wow, with length: 3
// Second Word: JavaScript, with length: 10
// Third Word: is, with length: 2
// Fourth Word: so, with length: 2
// Fifth Word: cool, with length: 4

var sentence2 = 'wow JavaScript is so cool';

var firstWord2 = sentence2.substring(0, 3);
var secondWord2 = sentence2.substring(4, 14);
var thirdWord2 = sentence2.substring(15, 17);
var fourthWord2 = sentence2.substring(18, 20);
var fifthWord2 = sentence2.substring(21, 26);

console.log('First Word: ' + `${firstWord2}, with length: ${firstWord2.length}`);
console.log('Second Word: ' + `${secondWord2}, with length: ${secondWord2.length}`);
console.log('Third Word: ' + `${thirdWord2}, with length: ${thirdWord2.length}`);
console.log('Fourth Word: ' + `${fourthWord2}, with length: ${fourthWord2.length}`);
console.log('Fifth Word: ' + `${fifthWord2}, with length: ${fifthWord2.length}`);