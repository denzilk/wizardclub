/*
You're given an arbitrary 32-bit integer n. Swap each pair of adjacent bits in its binary representation and return the result as a decimal number.

Example

For n = 13, the output should be
swapAdjacentBits(n) = 14.

1310 = 11012 ~> 11102 = 1410.

For n = 74, the output should be
swapAdjacentBits(n) = 133.

7410 = 010010102 ~> 100001012 = 13310.
Note the preceding zero written in front of the initial number: since both numbers are 32-bit integers, they have 32 bits in their binary representation. The preceding zeros in other cases don't matter, so they are omitted. Here, however, it does make a difference.

Input/Output

[time limit] 4000ms (js)
[input] integer n

Constraints:
0 ≤ n < 230.

[output] integer

https://codefights.com/arcade/code-arcade/corner-of-0s-and-1s/dShYZZT4WmvpmfpgB
*/


function swapAdjacentBits(n) {
  return ((0x55555555 & n) << 1) | ((0xAAAAAAAA & n) >> 1);
}

// mask all odds and shift left
// mask all evens and shift right
// mix em together, whaddaya get?

