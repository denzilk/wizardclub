/*
Given an array of integers, find the maximum possible sum you can get from one of its contiguous subarrays. The subarray from which this sum comes must contain at least 1 element.

Example

For inputArray = [-2, 2, 5, -11, 6], the output should be
arrayMaxConsecutiveSum2(inputArray) = 7.

The contiguous subarray that gives the maximum possible sum is [2, 5], with a sum of 7.

Input/Output

[time limit] 4000ms (js)
[input] array.integer inputArray

An array of integers.

Constraints:
3 ≤ inputArray.length ≤ 105,
-1000 ≤ inputArray[i] ≤ 1000.

[output] integer

The maximum possible sum of a subarray within inputArray.

https://codefights.com/interview/7TyXopDTvYArEDA7u

*/


function arrayMaxConsecutiveSum2(inputArray) {
    var i,j,k;
    var length = inputArray.length;
    var longest = Number.NEGATIVE_INFINITY;
    var sum;
/*    for(i=0; i<length; i++){
        for(j=i; j<length; j++){
            sum = inputArray.slice(i, j+1).reduce(function(acc, val){
               return acc + val;
            },0);
            if(sum > longest){
                longest = sum;
                start = i;
            }
        }
    }
*/

    var char=0;
    sum = 0;
    for(i=0; i<length; i++){
        sum += inputArray[i];

        if(sum > longest){
            longest = sum;
        }

        if(sum < 0){
            sum = 0;
        }

    }

    return longest;
}
