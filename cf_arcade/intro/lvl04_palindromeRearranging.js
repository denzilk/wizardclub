/*
Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
palindromeRearranging(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.

Input/Output

[time limit] 4000ms (js)
[input] string inputString

A string consisting of lowercase English letters.

Guaranteed constraints:
4 ≤ inputString.length ≤ 50.

[output] boolean

true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.


https://codefights.com/arcade/intro/level-4/Xfeo7r9SBSpo3Wico
*/


function palindromeRearranging(inputString) {
    var charcounts = {};
    var cursor;
    for(var i=0; i<inputString.length; i++){
        cursor = inputString[i];
        charcounts[cursor] = (charcounts[cursor] || 0) + 1;
    }
    var odds = Object.keys(charcounts).length & 1;

    for(i in charcounts){
        odds -= (charcounts[i]&1);
    }
    return (odds >= 0);            
}
