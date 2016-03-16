'use strict';

var fs = require('fs');

function FileWriter (filename, object, newFs) {
  this.filename = filename;
  this.object = JSON.stringify(object);
}

FileWriter.prototype.jsonToFileWriter = function (cb) {
  var _this = this;
  setTimeout(function () {
    fs.writeFile('uborka.json', _this.object, function (err) {
      if (err) {
        return cb(err);
      }
      console.log('JSON written to the file');
    });
  }, 2000);

};

module.exports = FileWriter;
