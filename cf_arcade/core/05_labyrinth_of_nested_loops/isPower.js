/*
Determine if the given number is a power of some non-negative integer.

Example

For n = 125, the output should be
isPower(n) = true;
For n = 72, the output should be
isPower(n) = false.
Input/Output

[time limit] 4000ms (js)
[input] integer n

A positive integer.

Guaranteed constraints:
1 ≤ n ≤ 350.

[output] boolean

true if n can be represented in the form ab (a to the power of b) where a and b are some non-negative integers and b ≥ 2, false otherwise.

https://codefights.com/arcade/code-arcade/labyrinth-of-nested-loops/yBFfNv5fTqhcacZ7w
*/

function isPower(n) {
    if (n==1){
        return true;
    }
    for(var i=2; i<n; i++){       
        for(var x=n; !(x%i); x/=i) ;
        
        if (x==1){
            return true;
        }        
    }
    return false;
}
