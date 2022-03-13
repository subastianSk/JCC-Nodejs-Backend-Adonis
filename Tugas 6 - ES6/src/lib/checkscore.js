exports.checkScore = (str) => {
    const nama = str.split(',')[0].split(':')[1];
    const kelas = str.split(',')[1].split(':')[1];
    const skor = str.split(',')[2].split(':')[1];

    return {
        name: nama,
        class: kelas,
        score: skor
    };
};