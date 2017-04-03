/*
Given an integer n, find the minimal k such that

    k = m! (where m! = 1 * 2 * ... * m) for some integer m;
    k >= n.

In other words, find the smallest factorial which is not less than n.

Example

For n = 17, the output should be
leastFactorial(n) = 24.

17 < 24 = 4! = 1 * 2 * 3 * 4, while 3! = 1 * 2 * 3 = 6 < 17).

Input/Output

    [time limit] 4000ms (js)

    [input] integer n

    A positive integer.

    Guaranteed constraints:
    1 ≤ n ≤ 120.

    [output] integer


https://codefights.com/arcade/code-arcade/loop-tunnel/7BFPq6TpsNjzgcpXy
*/


function leastFactorial(n) {
    var k = 1;
    for(var i=2; k<n; i++){
        k*=i;
    }
    return k;
}

