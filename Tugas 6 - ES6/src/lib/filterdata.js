exports.filterData = (kelas) => {
    const data = [{
            name: 'Ahmad',
            class: 'adonis'
        },
        {
            name: 'Regi',
            class: 'laravel'
        },
        {
            name: 'Bondra',
            class: 'adonis'
        },
        {
            name: 'Iqbal',
            class: 'vuejs'
        },
        {
            name: 'Putri',
            class: 'Laravel'
        },
    ];

    return data.filter((a) => {
        return a.class.toLowerCase() === kelas.toLowerCase();
    });
};