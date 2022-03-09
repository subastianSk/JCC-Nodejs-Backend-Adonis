// No.1
function teriak() {
    return ("Halo JCC!");
}

// No.2
function kalikan(num1, num2) {
    return num1 * num2;
}

// No.3
function kenalan(nama, age, hobby) {
    return ("Nama saya " + nama + ", umur saya " + age + " tahun, dan saya punya hobby yaitu " + hobby + "!");
}

module.exports = {
    teriak: teriak,
    kalikan: kalikan,
    kenalan: kenalan
}