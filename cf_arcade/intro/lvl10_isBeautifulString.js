/*
A string is said to be beautiful if b occurs in it no more times than a; c occurs in it no more times than b; etc.

Given a string, check whether it is beautiful.

Example

For inputString = "bbbaacdafe", the output should be
isBeautifulString(inputString) = true;
For inputString = "aabbb", the output should be
isBeautifulString(inputString) = false;
For inputString = "bbc", the output should be
isBeautifulString(inputString) = false.
Input/Output

[time limit] 4000ms (js)
[input] string inputString

A string of lowercase letters.

Guaranteed constraints:
3 ≤ inputString.length ≤ 50.

[output] boolean

https://codefights.com/arcade/intro/level-10/PHSQhLEw3K2CmhhXE
*/


function isBeautifulString(inputString) {
    var chars = {};
    var cursor;
    for(var i=0; i<inputString.length; i++){
        cursor = inputString[i];
        chars[cursor] = (chars[cursor] || 0) + 1;
    }
    var keys = Object.keys(chars).map(
        function(k){
            return k.charCodeAt(0);
        }
    );
    
    var a = 'a'.charCodeAt(0);
    var last_letter = Math.max.apply(null, keys);
    var code1, code2;
        
    for(var i=last_letter; i>a; i--){
        code1 = String.fromCharCode(i);
        code2 = String.fromCharCode(i-1);  // closer to a

        if(!chars[code2]){
            return false;
        }
        
        if(chars[code1] > chars[code2]){
            return false;
        }        
    }
    return true;
}
