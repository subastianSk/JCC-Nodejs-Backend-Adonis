// SOAL NO. 1
function range(startNum, finishNum) {
    var arr = [];
    var startNum = parseInt(startNum);
    var finishNum = parseInt(finishNum);
    if (startNum < finishNum) {
        while (startNum <= finishNum) {
            arr.push(startNum);
            startNum++;
        }
    } else {
        while (startNum >= finishNum) {
            arr.push(startNum);
            startNum--;
        }
    }
    return arr;
}

function rangeWithStep(startNum, finishNum, step = 1) {
    var arr = [];
    var startNum = parseInt(startNum);
    var finishNum = parseInt(finishNum);
    var step = parseInt(step);

    if (startNum < finishNum) {
        while (startNum <= finishNum) {
            arr.push(startNum);
            startNum += step;
        }
    } else {
        while (startNum >= finishNum) {
            arr.push(startNum);
            startNum -= step;
        }
    }
    return arr;
}

function sum(startNum, finishNum, step) {
    var arr = rangeWithStep(startNum, finishNum, step);
    var start = 1;
    var sum = arr[0];

    if (finishNum === undefined && startNum.toString() !== "NaN") {
        return parseInt(startNum);
    } else {
        while (start < arr.length) {
            sum += arr[start];
            start++
        }
        return sum;
    }
}

function dataHandling(input) {
    var input = [
        ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
        ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
        ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
        ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
    ];

    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < input[i].length; j++) {
            switch (j) {
                case 0:
                    console.log("Nomor ID: " + input[i][j]);
                    break;
                case 1:
                    console.log("Nama Lengkap: " + input[i][j]);
                    break;
                case 2:
                    console.log("TTL: " + input[i][j] + " " + input[i][j + 1]);
                    break;
                case 3:
                    console.log("Hobby: " + input[i][j + 1]);
                    break;
                default:
                    console.log("")
                    break;
            }
        }
    }
}

function balikKata(kata) {
    var arr = [kata];
    var out = ""

    for (i = arr[0].length; i >= 0; i--) {
        if (arr[0].substr(i, 1) === ",") {
            out += " ";
        } else {
            out += arr[0].substr(i, 1)
        }
    }
    return out;
}

module.exports = {
    range,
    rangeWithStep,
    sum,
    dataHandling,
    balikKata
}