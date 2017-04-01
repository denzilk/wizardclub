/*
Given a string, find the number of different characters in it.

Example

For s = "cabca", the output should be
differentSymbolsNaive(s) = 3.

There are 3 different characters a, b and c.

Input/Output

[time limit] 4000ms (js)
[input] string s

A string of lowercase latin letters.

Guaranteed constraints:
3 ≤ s.length ≤ 15.

[output] integer


https://codefights.com/arcade/intro/level-8/8N7p3MqzGQg5vFJfZ
*/


function differentSymbolsNaive(s) {
    var chars = {};
    for(var i=0; i<s.length; i++){
        chars[s[i]]=true;
    }
    return Object.keys(chars).length;
}

