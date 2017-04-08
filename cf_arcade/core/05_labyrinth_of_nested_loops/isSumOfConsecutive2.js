/*
Find the number of ways to express n as sum of some (at least two) consecutive positive integers.

Example

For n = 9, the output should be
isSumOfConsecutive2(n) = 2.

There are two ways to represent n = 9: 2 + 3 + 4 = 9 and 4 + 5 = 9.

For n = 8, the output should be
isSumOfConsecutive2(n) = 0.

There are no ways to represent n = 8.

Input/Output

[time limit] 4000ms (js)
[input] integer n

A positive integer.

Guaranteed constraints:
1 ≤ n ≤ 25.

[output] integer


https://codefights.com/arcade/code-arcade/labyrinth-of-nested-loops/EQSjA5PRfyHueeNkj
*/

function isSumOfConsecutive2(n) {
    var head = 2;
    var tail = 1;
    var sum = head + tail;
    var count = 0;
    while(head < n){
        switch(true){
            case (sum < n):
                head++
                sum+=head;
                break;
            case (sum ==n):
                count++;
            default: // fallthrough to sum > n                
                sum-=tail;
                tail++;
        }
    }
    return count;
}
