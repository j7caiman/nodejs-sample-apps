var fs = require('fs');

function getFilesByExtension(path, extension, callback) {
  fs.readdir(path, function(err, files) {
    if(files === undefined) {
      console.log("no files found in directory: " + path);
      return;
    }

    var filePaths = [];
    files.forEach(function(file) {
      if (file.split(".").pop() === extension) {
        filePaths.push(path + '/' + file);
      }
    });

    if(filePaths.length === 0 ) {
      console.log("no files in directory: " + path + " match extension: " + extension);
      return;
    }

    callback(filePaths);
  });
}

module.exports = getFilesByExtension;