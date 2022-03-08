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

var nama = "Jenita";
var peran = "Guard";

try {
    if (!nama) {
        throw ("Nama harus diisi");
    } else if (!peran) {
        throw (`Hallo ${nama},Pilih peranmu untuk memulai game!`);
    }

    console.log(`Selamat datang di Dunia Werewolf, ${nama}`);

    if (peran == "Penyihir") {
        console.log(`Halo Penyihir ${nama}, kamu dapat melihat siapa yang menjadi werewolf!`)
    } else if (peran == "Guard") {
        console.log(`Halo Guard ${nama}, kamu akan membantu melindungi temanmu dari serangan werewolf.`)
    } else if (peran == "Warewolf") {
        console.log(`Halo Werewolf ${nama}, Kamu akan memakan mangsa setiap malam!`)
    }
} catch (e) {
    console.error(e)
}