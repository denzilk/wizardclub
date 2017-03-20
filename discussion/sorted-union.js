/*
Sorted Union 
Write a function that takes two or more arrays and returns a new array 
of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be 
included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the 
final array should not be sorted in numerical order.

https://www.freecodecamp.com/challenges/sorted-union
*/

function uniteUnique(arr) {  
  //convert arguments to array
  var args = Array.prototype.slice.call(arguments);
  
  var out = args.reduce( function(acc, val) {
    var unduped = val.filter( function(num){
      return (acc.indexOf(num) < 0);
    });
    
    return acc.concat(unduped);
  },[]);
  
  return out;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
