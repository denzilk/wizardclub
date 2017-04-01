/*
Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".

Input/Output

[time limit] 4000ms (js)
[input] string s1

A string consisting of lowercase latin letters a-z.

Guaranteed constraints:
3 ≤ s1.length ≤ 15.

[input] string s2

A string consisting of lowercase latin letters a-z.

Guaranteed constraints:
4 ≤ s2.length ≤ 15.

[output] integer


https://codefights.com/arcade/intro/level-3/JKKuHJknZNj4YGL32
*/



function commonCharacterCount(s1, s2) {
    var cursor, chars1={}, chars2={};
    for(var i=0; i<s1.length; i++){
        cursor = s1[i];
        chars1[cursor] = (chars1[cursor] || 0) + 1;
    }
    for(var i=0; i<s2.length; i++){
        cursor = s2[i];
        chars2[cursor] = (chars2[cursor] || 0) + 1;
    }
    var shared = 0;
    for(i in chars1){
        if(chars1[i] && chars2[i]){
            shared += Math.min(chars1[i], chars2[i]);
        }
    }
    return shared;
}

