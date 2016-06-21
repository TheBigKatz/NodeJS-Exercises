var fs = require('fs');

fs.readFile('hello.txt', function(err, buffer) {
  if (err) {
    console.log('Error:', err);
    return;
  }
  console.log('Got data: ', buffer);
});

console.log('This happened before the data was ready.');
