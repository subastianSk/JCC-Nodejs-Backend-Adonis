const editData = (update) => {

    fspromise

        .readFile('data.json')

        .then((dataJson) => {

            let data = JSON.parse(dataJson);

            let updated = {
                ...data,
                ...update
            };

            return fspromise.writeFile('data.json', JSON.stringify(updated));

        })

        .then(() => console.log('updated'))

        .catch((err) => console.log(err));

};



// async await

const editData = async (update) => {

    let dataRead = await fspromise.readFile('data.json');

    let data = JSON.parse(dataRead);

    let updated = {
        ...data,
        ...update
    }

    await fspromise.writeFile('data.json', JSON.stringify(updated));

    console.log('updated');

}