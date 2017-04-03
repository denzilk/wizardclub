/*
Given integers n, l and r, find the number of ways to represent n as a sum of two integers A and B such that l ≤ A ≤ B ≤ r.

Example

For n = 6, l = 2 and r = 4, the output should be
countSumOfTwoRepresentations2(n, l, r) = 2.

There are just two ways to write 6 as A + B, where 2 ≤ A ≤ B ≤ 4: 6 = 2 + 4 and 6 = 3 + 3.

Input/Output

    [time limit] 4000ms (js)

    [input] integer n

    A positive integer.

    Guaranteed constraints:
    5 ≤ n ≤ 109.

    [input] integer l

    A positive integer.

    Guaranteed constraints:
    1 ≤ l ≤ r.

    [input] integer r

    A positive integer.

    Guaranteed constraints:
    l ≤ r ≤ 109,
    r - l ≤ 106.

    [output] integer

https://codefights.com/arcade/code-arcade/loop-tunnel/hBw5BJiZ4LmXcy92u
*/

function countSumOfTwoRepresentations2(n, l, r) {
    var poss = 0;
    for(var i=l; i <= (n-i); i++){
        if( (n-i) <= r ){
            poss++;
        }
    }
    return poss;
}

