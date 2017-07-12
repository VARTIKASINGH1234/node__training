var fs = require('fs');
var data1, data2;
fs.readFile('file1.txt', function (err, data) {
  if (err) {
      return console.error(err);
  }
  data1=data.toString();
    fs.appendFile('file2.txt', data1 , function(error) {
      if (error) {
        console.log('Error:- ' + error);
        throw error;
      }
      fs.readFile('file2.txt', function (err, data) {
        if (err) {
          return console.error(err);
        }
        data2=data.toString();
        fs.writeFile('file3.txt', '', function (err) {
          if (err) throw err;
          fs.appendFile('file3.txt', data2, function (err) {
            if (err) throw err;
            fs.readFile('file3.txt', function (err, data) {
              if (err) {
                return console.error(err);
              }
            
            });

          });
        });
      });

    });
  

});
