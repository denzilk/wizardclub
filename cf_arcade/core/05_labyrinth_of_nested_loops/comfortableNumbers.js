/*
Let's say that number a feels comfortable with number b if a ≠ b and b lies in the segment [a - s(a), a + s(a)], where s(x) is the sum of x's digits.

How many pairs (a, b) are there, such that a < b, both a and b lie on the segment [L, R], and each number feels comfortable with the other?

Example

For L = 10 and R = 12, the output should be
comfortableNumbers(L, R) = 2.

Here are all values of s(x) to consider:

s(10) = 1, so 10 is comfortable with 9 and 11;
s(11) = 2, so 11 is comfortable with 9, 10, 12 and 13;
s(12) = 3, so 12 is comfortable with 9, 10, 11, 13, 14 and 15.
Thus, there are 2 pairs of numbers comfortable with each other within the segment [10; 12]: (10, 11) and (11, 12).

Input/Output

[time limit] 4000ms (js)
[input] integer L

Guaranteed constraints:
1 ≤ L ≤ R ≤ 1000.

[input] integer R

Guaranteed constraints:
1 ≤ L ≤ R ≤ 1000.

[output] integer

The number of pairs satisfying all the above conditions.


https://codefights.com/arcade/code-arcade/labyrinth-of-nested-loops/pNfGgNk46YZ4c4RW5
*/


function comfortableNumbers(L, R) {
    var s1, s2, count = 0;
    for(var i=L; i<R; i++){
        for(var j=i+1; j<=R; j++){
            s1 = i.toString().split('').reduce(
                (a,v) => a + +v
            , 0);
            s2 = j.toString().split('').reduce(
                (a,v) => a + +v
            , 0);

            if ( ((i + s1) >= j) && ((j - s2) <= i) ){
                count++;
            }
        }
    }
    return count;
}

/*
function comfortableNumbers(L, R) {
    var s, count = {}, index;
    var l, r;
    for(var i=L; i<=R; i++){
        s = i.toString().split('').reduce(
            (acc, v) => acc + +v
        ,0 );
        
        l = Math.max(L, i-s);
        r = Math.min(R, i+s);

        for(var j=l; j<=r; j++){
            if (i==j) continue;
            index = [i,j].sort((a,b) => a-b).join('_');
            count[index] = (count[index] || 0) + 1;
        }
    }

    for(i in count){
        if(count[i] == 1){
            delete count[i];
        }
    }
    return Object.keys(count).length;
}
*/
