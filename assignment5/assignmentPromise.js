var fs = require('fs');
var data1;
fs.readFileAsync = function(file1) {
  var promise = new Promise(function(resolve, reject) {
    fs.readFile(file1, function(err, data) { 
      if (err) 
        reject(err); 
      else {
        data1 = data.toString();
        resolve(data);
      }     
    });
  });
  return promise;
};
fs.appendFileAsync = function(file2, data1 ) {
  var promise = new Promise(function(resolve, reject){
    fs.appendFile(file2, data1 , function(err) { 
      if (err)
        reject(err);
      else
        resolve();
    });
  }); 
  return promise;
};
fs.writeFileAsync = function() {
  var promise = new Promise(function(resolve, reject) {
    fs.writeFile('file3.txt', '', function(err) {
      if (err) 
        reject(err); 
      else 
        resolve();
    });
  });
   return promise;
};
fs.readFileAsync('file1.txt')
  .then(result => fs.appendFileAsync('file2.txt',data1))
  .then(result => fs.readFileAsync('file2.txt'))
  .then(result => fs.writeFileAsync())
  .then(result => fs.appendFileAsync('file3.txt',data1))
  .then(result => fs.readFileAsync('file3.txt'))
  .catch(function(err) {
    console.log('Error occurred!', err);
   });
