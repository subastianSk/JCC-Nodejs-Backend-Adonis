function tandaiA(str) {
    var string_baru = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] == 'a') {
            string_baru += 'x'
        } else {
            string_baru += str[i]
        }
    }
    return string_baru
}

// Tes Cases
console.log(tandaiA("abrakadabra")) // xbrxkxdxbrx
console.log(tandaiA("garuda")) // gxrudx
console.log(tandaiA("kucing")) // kucing