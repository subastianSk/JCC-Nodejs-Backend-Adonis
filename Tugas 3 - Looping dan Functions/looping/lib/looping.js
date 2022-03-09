// No.1
function loopWhile() {
    console.log("LOOPING PERTAMA");
    i = 1;
    while (i < 20) {
        console.log(i + " - I love coding");
        i += 2;
    }

    console.log("LOOPING KEDUA");
    while (i > 0) {
        console.log(i + " - I will become backend developer");
        i -= 2;
    }
}

// No. 2
function loopFor() {
    for (var i = 1; i <= 20; i++) {
        if (i % 3 == 0 && i % 2 !== 0) {
            console.log(i + " - I Love Coding");
        } else if (i % 2 == 0) {
            console.log(i + " - Berkualitas");
        } else if (i % 2 != 0) {
            console.log(i + " - Santai");
        }
    }
}

// No. 3
function persegiPanjang(panjang, lebar) {
    for (var i = 0; i < lebar; i++) {
        var out3 = ""
        for (var j = 0; j < panjang; j++) {
            out3 += "#";
        }
        console.log(out3);
    }
}


// No. 4
function tangga(sisi) {
    var out4 = "";
    for (var i = 0; i < sisi; i++) {
        out4 += "#"
        console.log(out4);
    }
}


// No. 5
function catur(sisi) {
    for (var i = 0; i < sisi; i++) {
        var out5 = "";
        if (i % 2 == 0) {
            k = 0;
        } else {
            k = 1;
        }
        for (var j = k; j < sisi; j++) {
            if (j % 2 == 0) {
                out5 += " ";
            } else {
                out5 += "#";
            }
        }
        console.log(out5);
    }
}


module.exports = {
    loopWhile: loopWhile,
    loopFor: loopFor,
    persegiPanjang: persegiPanjang,
    tangga: tangga,
    catur: catur
}