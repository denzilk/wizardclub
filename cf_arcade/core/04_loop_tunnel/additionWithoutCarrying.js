/*
A little boy is studying arithmetics. He has just learned how to add two integers, written one below another, column by column. But he always forgets about the important part - carrying.

Given two integers, find the result which the little boy will get.

Note: the boy used this site as the source of knowledge, feel free to check it out too if you are not familiar with column addition.

Example

For param1 = 456 and param2 = 1734, the output should be
additionWithoutCarrying(param1, param2) = 1180.

   456
  1734
+ ____
  1180

The little boy goes from right to left:

    6 + 4 = 10 but the little boy forgets about 1 and just writes down 0 in the last column
    5 + 3 = 8
    4 + 7 = 11 but the little boy forgets about the leading 1 and just writes down 1 under 4 and 7.
    There is no digit in the first number corresponding to the leading digit of the second one, so the little boy imagines that 0 is written before 456. Thus, he gets 0 + 1 = 1.

Input/Output

    [time limit] 4000ms (js)

    [input] integer param1

    A non-negative integer.

    Guaranteed constraints:
    0 ≤ param1 ≤ 99999.

    [input] integer param2

    A non-negative integer.

    Guaranteed constraints:
    0 ≤ param2 ≤ 59999.

    [output] integer

    The result that the little boy will get.



https://codefights.com/arcade/code-arcade/loop-tunnel/xzeZqCQjpfDJuN72S
*/

function additionWithoutCarrying(param1, param2) {
    var p = [0,0];
    p[0] = param1.toString().split('').reverse();
    p[1] = param2.toString().split('').reverse();

    var long = 1;
    var slen = p[0].length;
    var llen = p[1].length;
    
    if(p[0].length > p[1].length){
        long = 0;
        slen = p[1].length;
        llen = p[0].length;
    }
    
    var sub, out = '';
    for(var i=0; i<slen; i++){
        sub = +p[0][i] + +p[1][i];
        if(sub > 9){
            sub -= 10;
        }
        out = sub + out;
    }
    for( ; i<llen; i++){
        out = p[long][i] + out;
    }    
    return +out;
}
