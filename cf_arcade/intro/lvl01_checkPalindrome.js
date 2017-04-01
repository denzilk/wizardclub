/*
Given the string, check if it is a palindrome.

Example

For inputString = "aabaa", the output should be
checkPalindrome(inputString) = true;
For inputString = "abac", the output should be
checkPalindrome(inputString) = false;
For inputString = "a", the output should be
checkPalindrome(inputString) = true.
Input/Output

[time limit] 4000ms (js)
[input] string inputString

A non-empty string consisting of lowercase characters.

Guaranteed constraints:
1 ≤ inputString.length ≤ 10.

[output] boolean

true if inputString is a palindrome, false otherwise.


https://codefights.com/arcade/intro/level-1/s5PbmwxfECC52PWyQ
*/


function checkPalindrome(inputString) {
    var reverse = inputString.split('').reverse().join('');
    return (inputString == reverse);
}
