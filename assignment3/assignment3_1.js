//assignment1_1.js
var exports=module.exports={};
 exports.secondLargest=function(array) {
 var first, second;
    first = second = -99999;
  var n=array.length;
    for (var i = 0; i < n; i ++)
    {
        if (array[i] > first)
        {
            second = first;
            first = array[i];
        }
        else if (array[i] > second && array[i] != first)
            second = array[i];
    }
         return second;
}

