const data = {

    name: 'Bondra',

    nilai: 70,

    kelas: 'Adonis',

    isLogin: true,

};



const updateData = (update) => {

    let {

        name,

        nilai,

        kelas,

        isLogin

    } = {

        ...update

    };

    (name === undefined) ? (data.name = data.name) : (data.name = nilai);

    (nilai === undefined) ? (data.nilai = data.nilai) : (data.nilai = nilai);

    (kelas === undefined) ? (data.kelas = data.kelas) : (data.kelas = kelas);

    (isLogin === undefined) ? (data.isLogin = data.isLogin) : (data.isLogin = isLogin);



    return data;

};



// TEST CASES

console.log(updateData({

    isLogin: false

}));





// Output : { name: 'Bondra', nilai: 70, kelas: 'Adonis', isLogin: false }



console.log(updateData({
    nilai: 65,
    kelas: 'Laravel'
}));

// Output: { name: 'Bondra', nilai: 65, kelas: 'Laravel', isLogin: true }