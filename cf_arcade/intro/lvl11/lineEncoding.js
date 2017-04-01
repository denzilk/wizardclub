/*
Given a string, return its encoding defined as follows:

First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
for example, "aabbbc" is divided into ["aa", "bbb", "c"]
Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
for example, substring "bbb" is replaced by "3b"
Finally, all the new strings are concatenated together in the same order and a new string is returned.
Example

For s = "aabbbc", the output should be
lineEncoding(s) = "2a3bc".

Input/Output

[time limit] 4000ms (js)
[input] string s

String consisting of lowercase English letters.

Guaranteed constraints:
4 ≤ s.length ≤ 15.

[output] string

Encoded version of s.


https://codefights.com/arcade/intro/level-11/o2uq6eTuvk7atGadR
*/


function lineEncoding(s) {
    var out=[];    
    var j, regex, cursor;

    while (s.length > 0){
        cursor = s[0];
        regex = new RegExp('[^'+cursor+']');
        i = s.search(regex);
        
        switch(i){
            case -1:
                if(s.length<2){
                    out.push(cursor);                
                }else{
                    out.push(s.length+cursor)
                }
                return out.join('');
            case 1:
                out.push(cursor);
                break;
            default:
                out.push((i)+cursor);
        }        
        s = s.slice(i);
    }
}
