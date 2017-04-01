/*
Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).

Example

For inputString = "crazy", the output should be
alphabeticShift(inputString) = "dsbaz".

Input/Output

[time limit] 4000ms (js)
[input] string inputString

Non-empty string consisting of lowercase English characters.

Guaranteed constraints:
1 ≤ inputString.length ≤ 10.

[output] string

The result string after replacing all of its characters.


https://codefights.com/arcade/intro/level-6/PWLT8GBrv9xXy4Dui
*/


function alphabeticShift(inputString) {
    var out =[], code;
    var z = 'z'.charCodeAt(0);
    var a = 'a'.charCodeAt(0);
    for(var i=0; i<inputString.length; i++){
        code = inputString.charCodeAt(i) + 1;        
        if(code > z){
            code = a;
        }        
        out.push(code);
    }
    out = String.fromCharCode.apply(null, out);
    
    
    return out;
}


