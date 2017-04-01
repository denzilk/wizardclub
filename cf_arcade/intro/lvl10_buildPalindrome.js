/*
Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

Example

For st = "abcdc", the output should be
buildPalindrome(st) = "abcdcba".

Input/Output

[time limit] 4000ms (js)
[input] string st

A string consisting of lowercase latin letters.

Guaranteed constraints:
3 ≤ st.length ≤ 10.

[output] string



https://codefights.com/arcade/intro/level-10/ppZ9zSufpjyzAsSEx
*/


function buildPalindrome(st) {
    var rev = st.split('').reverse().join('');
    var suffix = '';
    
    for (var i=0; rev != (st + suffix); i++){
        suffix = st[i] + suffix;        
        rev = (st + suffix).split('').reverse().join('')
    }
    
    return rev;    
}
