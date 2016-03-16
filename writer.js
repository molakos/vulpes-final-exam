'use strict';

var fs = require('fs');

function FileWriter (filename, object, newFs) {
  this.filename = filename;
  this.object = object;
  this.fs = newFs || fs;
}

FileWriter.prototype.jsonToFileWriter = function (cb) {
  setTimeout(function () {
    this.fs.writeFile(this.filename, this.object, function (err) {
      if (err) {
        return cb(err);
      }
      console.log('JSON written to the file');
    });
  }, 2000);

};

module.exports = FileWriter;
