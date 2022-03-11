function hitungVokal(str) {
    var vocal = ["a", "i", "u", "e", "o"]
    var hitung = 0
    for (var i = 0; i < str.length; i++) {

        if (vocal.includes((str[i]).toLowerCase())) {
            hitung = hitung + 1
        }
    }
    return hitung

}

// Test Cases

console.log(hitungVokal("Adonis")) // Output:3

console.log(hitungVokal("Error")) //Output:2

console.log(hitungVokal("Eureka")) //Output:4

console.log(hitungVokal("Rsch")) // Output: 0