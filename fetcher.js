const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const path = process.argv[3];


request(url, path, (error, response, body) => {
  if (error) throw error;

  // write file with path
  fs.writeFile(path, body, () => {
    if (error) throw error;
    fs.stat(path, (error, stat) => {
      if (error) throw error;
      const fileSizeInBytes = stat.size;
      console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${path}`);
    });
  });

});