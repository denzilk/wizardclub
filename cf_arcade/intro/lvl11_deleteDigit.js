/*

Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example

For n = 152, the output should be
deleteDigit(n) = 52;
For n = 1001, the output should be
deleteDigit(n) = 101.
Input/Output

[time limit] 4000ms (js)
[input] integer n

Guaranteed constraints:
10 ≤ n ≤ 106.

[output] integer

https://codefights.com/arcade/intro/level-11/vpfeqDwGZSzYNm2uX
*/


function deleteDigit(n) {
    n = n.toString();
    
    var out=[];
    for(var i=0; i<n.length; i++){
        out.push('');
        for(var j=0; j<n.length; j++){
            if(i==j) continue;
            out[i] += n[j];
        }
    }
    
    out = out.map(
        function(n){
            return +n;
        }
    );
    
    return Math.max.apply(null, out);
}
