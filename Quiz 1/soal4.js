// ========== SOAL NO.1 ==========
function graduate(arr) {

    var hasil = {}
    var laravel1 = []
    var vuejs1 = []
    var reactjs1 = []
    var adonis1 = []

    function pushArr(input, kelas) {
        kelas.push(input.name)
        kelas.push(input.score)
        if (input.score < 60) {
            kelas.push("participated")
        } else if (input.score >= 60 && input.score <= 85) {
            kelas.push("completed")
        } else if (input.score > 85) {
            kelas.push("mastered")
        }
        tampung.name = kelas[0]
        tampung.score = kelas[1]
        tampung.grade = kelas[2]
    }

    for (var i = 0; i < arr.length; i++) {
        var namaKelas = arr[i].class
        var tampung = {}
        switch (arr[i].class.toLowerCase()) {
            case "adonis":
                var adonis = []
                pushArr(arr[i], laravel)
                adonis1.push(tampung)
                hasil[namaKelas] = adonis1
                break;
            case "vuejs":
                var vuejs = []
                pushArr(arr[i], vuejs)
                vuejs1.push(tampung)
                hasil[namaKelas] = vuejs1
                break;
            case "reactjs":
                var reactjs = []
                pushArr(arr[i], reactjs)
                reactjs1.push(tampung)
                hasil[namaKelas] = reactjs1
                break;
            case "laravel":
                var laravel = []
                pushArr(arr[i], laravel)
                laravel1.push(tampung)
                hasil[namaKelas] = laravel1
                break;
        }
    }
    return hasil
}


var arr = [

    {
        name: "Ahmad",
        score: 80,
        class: "Laravel"
    },

    {
        name: "Regi",
        score: 86,
        class: "Vuejs"
    },

    {
        name: "Robert",
        score: 59,
        class: "Laravel"
    },

    {
        name: "Bondra",
        score: 81,
        class: "Reactjs"
    }

]


console.log(graduate(arr))