var fs = require('fs');

function deleteListOfFiles(filePaths) {
  filePaths.forEach(function(file) {
    fs.unlink(file, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log(file + " deleted successfully.");
      }
    });
  });
}


module.exports = deleteListOfFiles;