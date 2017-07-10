
}
// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
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

// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
 var frequency={};
  var n=string.length;
  var code,character;
  for(var i=0;i<n;i++)
    {
      code=string.charCodeAt(i);
      if(code>=97 && code<=122)
        {
          character=string.charAt(i);
          if(frequency[character])
            frequency[character]++;
          else
             frequency[character]=1;
        }
    }
  return frequency;
}

// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flattenUtil(flat, unflatObject,string)
{
  var y;
  if(typeof unflatObject!="object")
    {
      flat[string]=unflatObject;
    }
  else
  for(y in unflatObject)
    {
      var string1=string+"."+y;
      flattenUtil(flat,unflatObject[y],string1);
    }
}

function flatten(unflatObject) {
  var flat={};
  for (var x in unflatObject)
    {
     var y;
      if(typeof unflatObject[x]!="object")
        {
          flat[x]=unflatObject[x];
        }
      else
        for(y in unflatObject[x])
          {
            var string=x+"."+y;
            flattenUtil(flat,unflatObject[x][y],string);
          }
      
    }
  return flat;
}

// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflattenUtil(unflat,unflatObject,string)
{
  var unflatObject1={};
  var n=string.length;
  var str;
  var i=n-1;
  while(i>=0 && string[i]!=".")
    {
      str=str+string[i];
      i--;
    }
  var str1;
  if(str!="number")
   str1=str.split("").reverse().join("");
  else
    str1=str;
  if(string[i]!=".")
    {
    unflat[string]=unflatObject;
    }
  else
    {
  string[i]='\0';
      unflatObject1[str1]=unflatObject;
  unflattenUtil(unflat,unflatObject1[str1],string);
    
      
    }
}
function unflatten(flatObject) {
  var unflat={};
  for(var x in flatObject)
    {
      unflattenUtil(unflat,unflatObject[x],x);
    }
 return unflat;
}
