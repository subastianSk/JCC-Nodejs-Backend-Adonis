// Soal No.3 Mengurai Kalimat(Substring)
// var sentence2 = 'wow JavaScript is so cool';

// var exampleFirstWord2 = sentence2.substring(0, 3);
// var secondWord2; // do your own! 
// var thirdWord2; // do your own! 
// var fourthWord2; // do your own! 
// var fifthWord2; // do your own! 

// console.log('First Word: ' + exampleFirstWord2);
// console.log('Second Word: ' + secondWord2);
// console.log('Third Word: ' + thirdWord2);
// console.log('Fourth Word: ' + fourthWord2);
// console.log('Fifth Word: ' + fifthWord2);
// Uraikan lah kalimat sentence2 di atas menjadi kata - kata penyusunnya.Output:
//     First Word: wow
// Second Word: JavaScript
// Third Word: is
// Fourth Word: so
// Fifth Word: cool

var sentence2 = 'wow JavaScript is so cool';

var exampleFirstWord2 = sentence2.substring(0, 3);
var secondWord2 = sentence2.substring(4, 14);
var thirdWord2 = sentence2.substring(15, 17);
var fourthWord2 = sentence2.substring(18, 20);
var fifthWord2 = sentence2.substring(21, 26);

console.log('First Word: ' + exampleFirstWord2);
console.log('Second Word: ' + secondWord2);
console.log('Third Word: ' + thirdWord2);
console.log('Fourth Word: ' + fourthWord2);
console.log('Fifth Word: ' + fifthWord2);