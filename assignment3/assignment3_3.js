// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
exports.flattenUtil = function  (flat, unflatObject, string) {
  var y;
  if (typeof unflatObject!="object") {
    flat[string]=unflatObject;
  }
  else
    for (y in unflatObject) {
      var string1=string+"."+y;
      flattenUtil(flat,unflatObject[y],string1);
    }
};

exports.flatten = function (unflatObject) {
  var flat={};
  for (var x in unflatObject) {
    var y;
    if (typeof unflatObject[x] != "object") {
      flat[x] = unflatObject[x];
    }
    else
      for (y in unflatObject[x]) {
        var string = x + "." + y;
        flattenUtil(flat, unflatObject[x][y], string);
      }
      
  }
  return flat;
};
