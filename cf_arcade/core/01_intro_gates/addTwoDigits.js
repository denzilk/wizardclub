/*
You are given a two-digit integer n. Return the sum of its digits.

Example

For n = 29, the output should be
addTwoDigits(n) = 11.

Input/Output

[time limit] 4000ms (js)
[input] integer n

A positive two-digit integer.

Guaranteed constraints:
10 ≤ n ≤ 99.

[output] integer

The sum of the first and second digits of the input number.

https://codefights.com/arcade/code-arcade/intro-gates/wAGdN6FMPkx7WBq66
*/


function addTwoDigits(n) {
    n=n.toString().split('');
    return n.reduce((a,v) => +v + a  , 0);
}
