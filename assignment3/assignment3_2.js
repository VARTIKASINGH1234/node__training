// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
var exports = module.exports = {};
exports.calculateFrequency = function (string) {
  var frequency = {};
  var n = string.length;
  var code,character;
  for (var i=0; i<n; i++) {
    code = string.charCodeAt(i);
    if (code >= 97 && code <= 122) {
      character = string.charAt(i);
      if (frequency[character]) {
        frequency[character]++;
      }
      else {
        frequency[character] = 1;
      }
    }
  }
  return frequency;
};
