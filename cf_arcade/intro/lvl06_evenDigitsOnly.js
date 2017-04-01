/*
Check if all digits of the given integer are even.

Example

For n = 248622, the output should be
evenDigitsOnly(n) = true;
For n = 642386, the output should be
evenDigitsOnly(n) = false.
Input/Output

[time limit] 4000ms (js)
[input] integer n

Guaranteed constraints:
1 ≤ n ≤ 109.

[output] boolean

true if all digits of n are even, false otherwise.

https://codefights.com/arcade/intro/level-6/6cmcmszJQr6GQzRwW
*/


function evenDigitsOnly(n) {
    n = n.toString().split('');

    var odds = n.some(
        function(i){
            return (+i & 1);
        }
    )
    return !odds;
}
