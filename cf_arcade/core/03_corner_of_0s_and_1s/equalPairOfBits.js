/*
You're given two integers, n and m. Find position of the rightmost pair of equal bits in their binary representations (it is guaranteed that such a pair exists), counting from right to left.

Return the value of 2position_of_the_found_pair (0-based).

Example

For n = 10 and m = 11, the output should be
equalPairOfBits(n, m) = 2.

1010 = 10102, 1110 = 10112, the position of the rightmost pair of equal bits is the bit at position 1 (0-based) from the right in the binary representations.
So the answer is 21 = 2.

Input/Output

[time limit] 4000ms (js)
[input] integer n

Guaranteed constraints:
0 ≤ n ≤ 230.

[input] integer m

Guaranteed constraints:
0 ≤ m ≤ 230.

[output] integer


https://codefights.com/arcade/code-arcade/corner-of-0s-and-1s/6SLJChm9N3fEgr2R7
*/


function equalPairOfBits(n, m) {
  return ((n^m)+1) & ~(n^m);
}
/*
// xoring + 1 will overflow to the first equal bit
// then we mask it with the negated xor for the changed bit
 */
