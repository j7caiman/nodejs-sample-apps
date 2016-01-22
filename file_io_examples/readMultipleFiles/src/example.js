var fs = require('fs');

var numFilesRead = 0;
function complete() {
  numFilesRead++;
  if (numFilesRead === 3) {
    console.log('it\'s ready');
    console.log('do some work');
  }
}

fs.readFile('./resources/map1.txt', function() {
  console.log("map1 read");
  complete();
});

fs.readFile('./resources/map2.txt', function() {
  console.log("map2 read");
  complete();
});

fs.readFile('./resources/map3.txt', function() {
  console.log("map3 read");
  complete();
});