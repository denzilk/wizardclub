
/*
Avoid using built-in big integers to solve this challenge. Implement them yourself, since this is what you would be asked to do during a real interview.

Given two binary strings a and b, add them together and return the resulting string.

Example

For a = "1000" and b = "111", the output should be
addBinaryStrings(a, b) = "1111";
For a = "1" and b = "1", the output should be
addBinaryStrings(a, b) = "10".
Input/Output

[time limit] 4000ms (js)
[input] string a

A string that can contain only 0 and 1.

Constraints:
0 ≤ a.length ≤ 105.

[input] string b

A string that can contain only 0 and 1.

Constraints:
0 ≤ b.length ≤ 105.

[output] string

The result of adding strings a and b, without any leading zeros.



https://codefights.com/interview/ewvpS4DMTpppMDsJm

*/



function binadd(a,b,overflow){
    var sum = Number(a) + Number(b) + overflow;
    return {
        sum: sum & 1,
        overflow: Number(sum > 1)
    };
}

function addBinaryStrings(a, b) {
    var out, long, short;
    if (a.length > b.length){
        long = a;
        short = b;
    }else{
        long = b;
        short = a;
    }

    long = long.split('').reverse();
    short = short.split('').reverse();
    out = long.map(function(c){
        return 0;
    });

    var i,j, ret, of = 0;

    for(i=0; i<short.length; i++){
        ret = binadd(long[i], short[i], of);
        of = ret.overflow;
        out[i] = ret.sum;
    }
    for(; i<long.length; i++){
        ret = binadd(long[i], 0, of);
        of = ret.overflow;
        out[i] = ret.sum;
    }
    if(of){
        out.push(1);
    }
    out = out.reverse().join('');
    return out;
}
