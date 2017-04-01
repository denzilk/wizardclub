/*
Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
isLucky(n) = true;
For n = 239017, the output should be
isLucky(n) = false.
Input/Output

[time limit] 4000ms (js)
[input] integer n

A ticket number represented as a positive integer with an even number of digits.

Guaranteed constraints:
10 ≤ n < 106.

[output] boolean

true if n is a lucky ticket number, false otherwise.


https://codefights.com/arcade/intro/level-3/3AdBC97QNuhF6RwsQ
*/

function isLucky(n) {
    n = n.toString().split('');
    var mid = n.length / 2;
    
    var sum = 0;
    for(var i= 0; i< mid; i++){
        sum += Number(n[i]);
    }
    for(; i< n.length; i++){
        sum -= Number(n[i]);
    }    
        
    return !sum;
}
