// Soal No .2 Mengurai kalimat(Akses karakter dalam string),
//     Terdapat satu kalimat seperti berikut:
//     var sentence = "I am going to be React Native Developer";

// var exampleFirstWord = sentence[0];
// var exampleSecondWord = sentence[2] + sentence[3];
// var thirdWord; // lakukan sendiri 
// var fourthWord; // lakukan sendiri 
// var fifthWord; // lakukan sendiri 
// var sixthWord; // lakukan sendiri 
// var seventhWord; // lakukan sendiri 
// var eighthWord; // lakukan sendiri 

// console.log('First Word: ' + exampleFirstWord);
// console.log('Second Word: ' + secondWord);
// console.log('Third Word: ' + thirdWord);
// console.log('Fourth Word: ' + fourthWord);
// console.log('Fifth Word: ' + fifthWord);
// console.log('Sixth Word: ' + sixthWord);
// console.log('Seventh Word: ' + seventhWord);
// console.log('Eighth Word: ' + eighthWord)
// Buat menjadi Output berikut:
//     First word: I
// Second word: am
// Third word: going
// Fourth word: to
// Fifth word: be
// Sixth word: React
// Seventh word: Native
// Eighth word: Developer

var sentence = "I am going to be React Native Developer";

var firstWord = sentence[0];
var secondWord = sentence[2] + sentence[3];
var thirdWord = sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9]
var fourthWord = sentence[11] + sentence[12];
var fifthWord = sentence[14] + sentence[15];
var sixthWord = sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21]
var seventhWord = sentence[23] + sentence[24] + sentence[25] + sentence[26] + sentence[27] + sentence[28]
var eighthWord = sentence[30] + sentence[31] + sentence[32] + sentence[33] + sentence[34] + sentence[35] + sentence[36] + sentence[37] + sentence[38]

console.log('First Word: ' + firstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);
console.log('Sixth Word: ' + sixthWord);
console.log('Seventh Word: ' + seventhWord);
console.log('Eighth Word: ' + eighthWord)