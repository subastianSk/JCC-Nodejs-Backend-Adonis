var date = new Date();
var thisYear = date.getFullYear();

// ============ SOAL NO. 1 ============
console.log('============ SOAL NO. 1 ============');

function arrayToObject(input) {
    var biodata = {};
    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < 4; j++) {
            switch (j) {
                case 0:
                    biodata.firstName = input[i][j];
                    break;
                case 1:
                    biodata.lastName = input[i][j];
                    break;
                case 2:
                    biodata.gender = input[i][j];
                    break;
                case 3:
                    // Check input tahun
                    if (input[i][j] === undefined || input[i][j] > thisYear) {
                        biodata.age = "Invalid birth year";
                    } else {
                        biodata.age = thisYear - input[i][j];
                    }
                    break;
            }
        }
        var objBiodata = JSON.stringify(biodata)
        // Memanggil Object
        console.log(`${i + 1}. ${biodata.firstName} ${biodata.lastName}:  ${objBiodata}`);
    }
}

// var people = [
//     ["Bruce", "Banner", "male", 1975],
//     ["Natasha", "Romanoff", "female"]
// ];
// arrayToObject(people);

// var people2 = [
//     ["Tony", "Stark", "male", 1980],
//     ["Pepper", "Pots", "female", 2023]
// ];
// arrayToObject(people2);
arrayToObject([])

// ============ SOAL NO. 2 ============
console.log('============ SOAL NO. 2 ============');

function shoppingTime(memberId, money) {
    var listItem = {
        "Sepatu Stacattu": 1500000,
        "Baju Zoro": 500000,
        "Baju H&N": 250000,
        "Sweater Uniklooh": 175000,
        "Casing Handphone": 50000
    }

    var listPurchased = [];
    var totalPurchase = {};

    // Check input
    if (memberId === "" || memberId === undefined) {
        return "Mohon maaf, toko X hanya berlaku untuk member saja";
    } else if (money < 50000) {
        return "Mohon maaf, uang tidak cukup";
    } else {
        // Menghitung changeMoney dan push array daftar item yang dibeli
        var changeMoney = money;
        if (changeMoney >= listItem["Sepatu Stacattu"]) {
            changeMoney -= listItem["Sepatu Stacattu"];
            listPurchased.push('Sepatu Stacattu');
        }
        if (changeMoney >= listItem["Baju Zoro"]) {
            changeMoney -= listItem["Baju Zoro"];
            listPurchased.push("Baju Zoro");
        }
        if (changeMoney >= listItem["Baju H&N"]) {
            changeMoney -= listItem["Baju H&N"];
            listPurchased.push("Baju H&N");
        }
        if (changeMoney >= listItem["Sweater Uniklooh"]) {
            changeMoney -= listItem["Sweater Uniklooh"];
            listPurchased.push("Sweater Uniklooh");
        }
        if (changeMoney >= listItem["Casing Handphone"]) {
            changeMoney -= listItem["Casing Handphone"];
            listPurchased.push("Casing Handphone");
        }
        // Deklarasi Object
        totalPurchase.memberId = memberId;
        totalPurchase.money = money;
        totalPurchase.listPurchased = listPurchased;
        totalPurchase.changeMoney = changeMoney;
        return totalPurchase;
    }
}

console.log(shoppingTime('1820RzKrnWn08', 2475000));
// console.log(shoppingTime('82Ku8Ma742', 170000));
// console.log(shoppingTime('', 2475000));
// console.log(shoppingTime('234JdhweRxa53', 15000));
// console.log(shoppingTime());

// ============ SOAL NO. 3 ============
console.log('============ SOAL NO. 3 ============');

function naikAngkot(listPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var hasil = [];

    for (var i = 0; i < listPenumpang.length; i++) {
        var output = {}
        var start = ''
        var end = ''
        var bayar = 0
        // Deklarasi Object
        for (var j = 0; j <= 3; j++) {
            switch (j) {
                case 0:
                    output.penumpang = listPenumpang[i][j];
                    break;
                case 1:
                    output.naikDari = listPenumpang[i][j];
                    start = j
                    break;
                case 2:
                    output.tujuan = listPenumpang[i][j];
                    end = j
                    break;
                case 3:
                    // Mencari index untuk slice rute
                    for (var k = 0; k < rute.length; k++) {
                        if (rute[k] === listPenumpang[i][start]) {
                            iris1 = k;
                        } else if (rute[k] === listPenumpang[i][end]) {
                            iris2 = k;
                        }
                    }
                    // Menghitung biaya perjalanan
                    var hitung = rute.slice(iris1, iris2 + 1);
                    for (var l = 1; l < hitung.length; l++) {
                        bayar = bayar + 2000
                    }
                    output.bayar = bayar;
                    break;
            }
        }
        hasil.push(output)
    }
    return hasil;
}

console.log(naikAngkot([
    ['Dimitri', 'B', 'F'],
    ['Icha', 'A', 'B']
]));


// ============ SOAL NO. 4 ============
console.log('============ SOAL NO. 4 ============');

function nilaiTertinggi(siswa) {
    var hasil = {}
    var adonis = []
    var vuejs = []
    var reactjs = []
    var laravel = []

    function pushHasil(kelas) {
        var namaKelas = kelas[0].class
        if (kelas.length !== 1) {
            for (var j = 0; j < kelas.length; j++) {
                if (kelas[j].score < kelas[j + 1].score) {
                    kelas = kelas[j + 1];
                } else {
                    kelas = kelas[j];
                }
            }
            hasil[namaKelas] = {};
            hasil[namaKelas].name = kelas.name
            hasil[namaKelas].score = kelas.score
        } else {
            hasil[namaKelas] = {};
            hasil[namaKelas].name = kelas[0].name
            hasil[namaKelas].score = kelas[0].score
        }
    }
    for (var i = 0; i < siswa.length; i++) {
        switch (siswa[i].class) {
            case "adonis":
                adonis.push(siswa[i])
                break;
            case "vuejs":
                vuejs.push(siswa[i])
                break;
            case "reactjs":
                reactjs.push(siswa[i])
                break;
            case "laravel":
                laravel.push(siswa[i])
                break;
        }
    }
    for (var i = 0; i < siswa.length; i++) {
        switch (siswa[i].class) {
            case "adonis":
                pushHasil(adonis)
                break;
            case "vuejs":
                pushHasil(vuejs)
                break;
            case "reactjs":
                pushHasil(reactjs)
                break;
            case "laravel":
                pushHasil(laravel)
                break;
        }
    }
    return hasil;
}

console.log(nilaiTertinggi([{
        name: 'Asep',
        score: 90,
        class: 'adonis'
    },
    {
        name: 'Ahmad',
        score: 85,
        class: 'vuejs'
    },
    {
        name: 'Regi',
        score: 74,
        class: 'adonis'
    },
    {
        name: 'Afrida',
        score: 78,
        class: 'reactjs'
    }
]));

console.log(nilaiTertinggi([{
        name: 'Bondra',
        score: 100,
        class: 'adonis'
    },
    {
        name: 'Putri',
        score: 76,
        class: 'laravel'
    },
    {
        name: 'Iqbal',
        score: 92,
        class: 'adonis'
    },
    {
        name: 'Tyar',
        score: 71,
        class: 'laravel'
    },
    {
        name: 'Hilmy',
        score: 80,
        class: 'vuejs'
    }
]));