/*
Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:


Example

For bishop = "a1" and pawn = "c3", the output should be
bishopAndPawn(bishop, pawn) = true.



For bishop = "h1" and pawn = "h3", the output should be
bishopAndPawn(bishop, pawn) = false.



Input/Output

[time limit] 4000ms (js)
[input] string bishop

Coordinates of the white bishop in the chess notation.

[input] string pawn

Coordinates of the black pawn in the same notation.

[output] boolean

true if the bishop can capture the pawn, false otherwise.




https://codefights.com/arcade/intro/level-9/6M57rMTFB9MeDeSWo
*/


function translate(pos){
    pos = pos.split('');
    var col = pos[0].charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    
    return [col, +pos[1]];
}

function bishopAndPawn(bishop, pawn) {
    var bpos = translate(bishop);
    var ppos = translate(pawn);
    
    var diffx = Math.abs(bpos[0] - ppos[0]);
    var diffy = Math.abs(bpos[1] - ppos[1]);    
    
    console.log(bpos);
    console.log(ppos);
    
    return diffx == diffy;
}


