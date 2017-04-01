/*
Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

Example

For year = 1905, the output should be
centuryFromYear(year) = 20;
For year = 1700, the output should be
centuryFromYear(year) = 17.
Input/Output

[time limit] 4000ms (js)
[input] integer year

A positive integer, designating the year.

Guaranteed constraints:
1 ≤ year ≤ 2005.

[output] integer

The number of the century the year is in.

https://codefights.com/arcade/intro/level-1/egbueTZRRL5Mm4TXN
*/

//duh

function centuryFromYear(year) {
    var yyyy = year.toString();
    var len = yyyy.length;
    for(var i=len; i<4; i++){
        yyyy = '0'+yyyy;
    }
    
    var pre = Number(yyyy.slice(0,2));
    var suf = Number(yyyy.slice(2));
    
    if(suf > 0){
        pre++;
    }
    return pre;    
}

