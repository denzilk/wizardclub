/*
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
Input/Output

[time limit] 4000ms (js)
[input] array.string picture

A non-empty array of non-empty equal-length strings.

Guaranteed constraints:
1 ≤ picture.length ≤ 5,
1 ≤ picture[i].length ≤ 5.

[output] array.string

The same matrix of characters, framed with a border of asterisks of width 1.


https://codefights.com/arcade/intro/level-4/ZCD7NQnED724bJtjN
*/


function addBorder(picture) {
    var arr=[];
    var w = picture[0].length + 2;
    var h = picture.length;
    
    var bookends = '';
    for(var i=0; i< w; i++){
        bookends += '*';
    }
    
    arr.push(bookends);    
    for(i= 0; i<h; i++){
        arr.push('*' + picture[i] + '*');
    }
    arr.push(bookends);
    return arr;
    
}
