/*
You have a string s that consists of English letters, punctuation marks, whitespace characters, and brackets. It is guaranteed that the parentheses in s form a regular bracket sequence.

Your task is to reverse the strings contained in each pair of matching parentheses, starting from the innermost pair. The results string should not contain any parentheses.

Example

For string s = "a(bc)de", the output should be
reverseParentheses(s) = "acbde".

Input/Output

[time limit] 4000ms (js)
[input] string s

A string consisting of English letters, punctuation marks, whitespace characters and brackets. It is guaranteed that parentheses form a regular bracket sequence.

Constraints:
5 ≤ s.length ≤ 55.

[output] string


https://codefights.com/arcade/intro/level-3/3o6QFqgYSontKsyk4
*/


function reverseParentheses(s) {

    var open, close, match = 0;
    var parens = [];
    for(var i=0; i<s.length; i++){
        switch(s[i]){
            case '(': 
                match++;
                if(match == 1){
                    open= i;
                }
                break;
            case ')': 
                match--; 
                if(match == 0){
                    close = i;
                    parens.push([open,close]);
                }
                break;
        }
    }

    if(parens.length == 0){
        return s;
    }

    var out = '';
    var close = -1;
    var recurse;
    for(i=0; i<parens.length; i++){
        open = parens[i][0];
        out += s.slice(close+1, open);
        close = parens[i][1];
        recurse = reverseParentheses(s.slice(open+1, close));
        out += recurse.split('').reverse().join('');
    }
    out += s.slice(close+1);
    

    
    return out;
}
