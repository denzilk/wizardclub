/*
You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

Example

For inputArray = [1, 1, 1], the output should be
arrayChange(inputArray) = 3.

Input/Output

[time limit] 4000ms (js)
[input] array.integer inputArray

Guaranteed constraints:
3 ≤ inputArray.length ≤ 105,
-105 ≤ inputArray[i] ≤ 105.

[output] integer

The minimal number of moves needed to obtain a strictly increasing sequence from inputArray.
It's guaranteed that for the given test cases the answer always fits signed 32-bit integer type.


https://codefights.com/arcade/intro/level-4/xvkRbxYkdHdHNCKjg
*/


function arrayChange(inputArray) {
    var changes = 0;
    for(var i=1; i<inputArray.length; i++){
        while(inputArray[i] <= inputArray[i-1]){
            inputArray[i]++;
            changes++;
        }
    }
    return changes;
}
