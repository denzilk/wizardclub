/*

Given an integer n, return the largest number that contains exactly n digits.

Example

For n = 2, the output should be
largestNumber(n) = 99.

Input/Output

[time limit] 4000ms (js)
[input] integer n

Guaranteed constraints:
1 ≤ n ≤ 7.

[output] integer

The largest integer of length n.

https://codefights.com/arcade/code-arcade/intro-gates/SZB5XypsMokGusDhX
*/

function largestNumber(n) {
    return +('9'.repeat(n));
}
