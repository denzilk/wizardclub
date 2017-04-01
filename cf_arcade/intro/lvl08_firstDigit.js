/*
Find the leftmost digit that occurs in a given string.

Example

For inputString = "var_1__Int", the output should be
firstDigit(inputString) = '1';
For inputString = "q2q-q", the output should be
firstDigit(inputString) = '2';
For inputString = "0ss", the output should be
firstDigit(inputString) = '0'.
Input/Output

[time limit] 4000ms (js)
[input] string inputString

A string containing at least one digit.

Guaranteed constraints:
3 ≤ inputString.length ≤ 10.

[output] char


https://codefights.com/arcade/intro/level-8/rRGGbTtwZe2mA8Wov
*/


function firstDigit(inputString) {
    var match = inputString.match(/\d/);
    return match[0];
}
