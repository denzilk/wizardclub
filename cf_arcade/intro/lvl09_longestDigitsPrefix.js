/*
Given a string, output its longest prefix which contains only digits.

Example

For inputString="123aa1", the output should be
longestDigitsPrefix(inputString) = "123".

Input/Output

[time limit] 4000ms (js)
[input] string inputString

Guaranteed constraints:
3 ≤ inputString.length ≤ 35.

[output] string


https://codefights.com/arcade/intro/level-9/AACpNbZANCkhHWNs3
*/

function longestDigitsPrefix(inputString) {
    var match = inputString.match(/^\d+/);
    if(match){
        return match[0];
    }
    return '';
}
