/*
You're given two integers, n and m. Find position of the rightmost bit in which they differ in their binary representations (it is guaranteed that such a bit exists), counting from right to left.

Return the value of 2position_of_the_found_bit (0-based).

Example

For n = 11 and m = 13, the output should be
differentRightmostBit(n, m) = 2.

1110 = 10112, 1310 = 11012, the rightmost bit in which they differ is the bit at position 1 (0-based) from the right in the binary representations.
So the answer is 21 = 2.

For n = 7 and m = 23, the output should be
differentRightmostBit(n, m) = 16.

710 = 1112, 2310 = 101112, i.e.

00111
10111
So the answer is 24 = 16.

Input/Output

[time limit] 4000ms (js)
[input] integer n

Guaranteed constraints:
0 ≤ n ≤ 230.

[input] integer m

Guaranteed constraints:
0 ≤ m ≤ 230,
n ≠ m.

[output] integer


https://codefights.com/arcade/code-arcade/corner-of-0s-and-1s/whz5JzszYTdXW6aNA
*/


function differentRightmostBit(n, m) {
  return (n^m) & -(n^m) ;
}
/*
 agg two's complement (negation + 1)
 gives us the right most difference mask.
 so obvious now. 
 
function rmb(n, m){
    var ret = (n^m);
    console.log(ret.toString(2));
    console.log((-ret).toString(2));    

    for(var i=1; !(ret & 1); i<<=1){
        ret >>= 1;
    }
    return i;
}
*/
