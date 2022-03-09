var deret = require('./lib/array.js');

var args = process.argv;

switch (args[2]) {
    case "range":
        console.log(deret.range(args[3], args[4]));
        break;

    case "rangeWithStep":
        console.log(deret.rangeWithStep(args[3], args[4], args[5]));
        break;

    case "sum":
        console.log(deret.sum(args[3], args[4], args[5]));
        break;
    case "dataHandling":
        deret.dataHandling();
        break;
    case "balikKata":
        console.log(deret.balikKata(args[3]));
        break;
    default:
        console.log(`
        List Perintah:
        1. node array range <startNum> <finishNum>
        2. node array rangeWithStep <startNum> <finishNum> <step> (default step = 1)
        3. node array sum <startNum> <finishNum> <step> (default step = 1)
        4. node array dataHandling
        5. node array balikKata <kata>
        `)
}