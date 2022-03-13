"use strict";

var sapa = require('./lib/sapa.js');

var convert = require('./lib/convert');

var checkScore = require('./lib/checkscore');

var filterData = require('./lib/filterdata');

var args = process.argv.slice(2);

switch (args[0]) {
  case 'sapa':
    console.log(sapa.sapa(args[1]));
    break;

  case 'convert':
    console.log(convert.convert(args[1], args[2], args[3]));
    break;

  case 'checkScore':
    console.log(checkScore.checkScore(args[1]));
    break;

  case 'filterData':
    console.log(filterData.filterData(args[1]));
    break;

  default:
    console.log('Command yang anda inputkan tidak ditemukan!');
    console.log("1. node dist sapa <nama> \n2. node dist convert <nama> <domisili> <umur> \n3. node dist checkScore <string-data> \n4. node dist filterData <nama-kelas>");
}