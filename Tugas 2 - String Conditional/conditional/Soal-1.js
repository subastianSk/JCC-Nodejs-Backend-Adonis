// Input:

//     var nama = "John"
// var peran = ""
// Output:

// Output untuk Input nama = '' dan peran = ''
// "Nama harus diisi!"

//Output untuk Input nama = 'John' dan peran = ''
// "Halo John, Pilih peranmu untuk memulai game!"

//Output untuk Input nama = 'Jane' dan peran 'Penyihir'
// "Selamat datang di Dunia Werewolf, Jane"
// "Halo Penyihir Jane, kamu dapat melihat siapa yang menjadi werewolf!"

//Output untuk Input nama = 'Jenita' dan peran 'Guard'
// "Selamat datang di Dunia Werewolf, Jenita"
// "Halo Guard Jenita, kamu akan membantu melindungi temanmu dari serangan werewolf."

//Output untuk Input nama = 'Junaedi' dan peran 'Werewolf'
// "Selamat datang di Dunia Werewolf, Junaedi"
// "Halo Werewolf Junaedi, Kamu akan memakan mangsa setiap malam!"

var nama = "John"
var peran = ""

if (!nama) {
    console.log("Nama harus diisi");
} else if (nama == 'John' && peran == "") {
    console.log("Halo John Pilih peranmu untuk memulai game!")
} else if (nama == 'Jane' && peran == "Penyihir") {
    console.log("Selamat datang di Dunia Werewolf, Jane");
    console.log("Halo Penyihir Jane, kamu dapat melihat siapa yang menjadi werewolf!");

} else if (nama == 'Jenita' && peran == "Guard") {
    console.log("Selamat datang di Dunia Werewolf, Jenita");
    console.log("Halo Guard Jenita, kamu akan membantu melindungi temanmu dari serangan werewolf.");

} else if (nama == 'Junaedi' && peran == "Werewolf") {
    console.log("Selamat datang di Dunia Werewolf, Junaedi");
    console.log("Halo Werewolf Junaedi, Kamu akan memakan mangsa setiap malam!");

}