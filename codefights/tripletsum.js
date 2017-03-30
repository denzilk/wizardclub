/*
Note: Write a solution with O(n2) time complexity, since this is what you would be asked to do during a real interview.

You have an array a composed of exactly n elements. Given a number x, determine whether or not a contains three elements for which the sum is exactly x.

Example

    For x = 15 and a = [14, 1, 2, 3, 8, 15, 3], the output should be
    tripletSum(x, a) = false;

    For x = 8 and a = [1, 1, 2, 5, 3], the output should be
    tripletSum(x, a) = true.

    The given array contains the elements 1,2, and 5, which add up to 8.

Input/Output

    [time limit] 4000ms (js)

    [input] integer x

    Constraints:
    1  x  3000.

    [input] array.integer a

    Constraints:
    3  a.length  1000,

    1  a[i]  1000.

    [output] boolean

    Return true if the array contains three elements that add up to x and false otherwise.

   https://codefights.com/interview/MZnrYnavhHmYEwZs8/description
*/

function tripletSum(x, a) {
  var alen = a.length;
  for(var i=0; i< alen; i++){
    for(var j=i+1; j< alen; j++){
      for(var k=j+1; k< alen; k++){
        if (a[i] + a[j] + a[k] == x){
          return true;
        }
      }
    }
  }
  return false;
}

