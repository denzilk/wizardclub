/*
Given array of integers, find the maximal possible sum of some of its k consecutive elements.

Example

For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
arrayMaxConsecutiveSum(inputArray, k) = 8.
All possible sums of 2 consecutive elements are:

2 + 3 = 5;
3 + 5 = 8;
5 + 1 = 6;
1 + 6 = 7.
Thus, the answer is 8.
Input/Output

[time limit] 4000ms (js)
[input] array.integer inputArray

Array of positive integers.

Guaranteed constraints:
3 ≤ inputArray.length ≤ 105,
1 ≤ inputArray[i] ≤ 1000.

[input] integer k

An integer (not greater than the length of inputArray).

Guaranteed constraints:
1 ≤ k ≤ inputArray.length.

[output] integer

The maximal possible sum.




https://codefights.com/arcade/intro/level-8/Rqvw3daffNE7sT7d5
*/


function arrayMaxConsecutiveSum(inputArray, k) {
    var len = inputArray.length;
    
    var tail = 0, sum=0, highest=0;
    for(var head=0; head<k; head++){
        sum += inputArray[head];
    }
    highest = sum;
    
    while(head < len){
        sum += inputArray[head];
        sum -= inputArray[tail];
        
        if(sum > highest){
            highest = sum;
        }        
        tail++;
        head++;
    }
    return highest;
}
