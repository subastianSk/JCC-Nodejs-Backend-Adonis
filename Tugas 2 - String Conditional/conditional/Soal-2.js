// Contoh:

//     var hari = 21;
// var bulan = 1;
// var tahun = 1945;
//  Maka hasil yang akan tampil di console adalah: '21 Januari 1945'; 
// Skeleton Code / Code yang dicontohkan yang perlu diikuti dan dimodifikasi

// var tanggal; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
// var bulan; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
// var tahun; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
let hari = 21
let bulan = 1;
let tahun = 2012;

try {
    switch (bulan) {
        case 1: {
            bulan = "Januari";
            break;
        }
        case 2: {
            bulan = "Februari";
            break;
        }
        case 3: {
            bulan = "Maret";
            break;
        }
        case 4: {
            bulan = "April";
            break;
        }
        case 5: {
            bulan = "Mei";
            break;
        }
        case 6: {
            bulan = "Juni";
            break;
        }
        case 7: {
            bulan = "Juli";
            break;
        }
        case 8: {
            bulan = "Agustus";
            break;
        }
        case 9: {
            bulan = "September";
            break;
        }
        case 10: {
            bulan = "Oktober";
            break;
        }
        case 11: {
            bulan = "November";
            break;
        }
        case 12: {
            bulan = "Desember";
            break;
        }
        default: {
            throw "Bulan tidak valid"
            break;
        }
    }

    if (!(hari >= 1 && hari <= 31)) {
        throw "Tanggal tidak valid"
    }

    if (!(tahun >= 1900 && tahun <= 2200)) {
        throw "Tahun tidak valid"
    }

    console.log(hari, bulan, tahun);
} catch (e) {
    console.log(e)
}