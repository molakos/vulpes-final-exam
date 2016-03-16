'use strict';

var FileWriter = require('./writer');
var randomObject = { tojas: "Eggdice a.k.a nightmare of StarCraft" };

var fileWriter = new FileWriter('./uborka.json', randomObject);

fileWriter.jsonToFileWriter(function(err) {
  console.log(err);
})
