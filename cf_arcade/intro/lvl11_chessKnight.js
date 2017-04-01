/*
Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.



Example

For cell = "a1", the output should be
chessKnight(cell) = 2.



For cell = "c2", the output should be
chessKnight(cell) = 6.



Input/Output

[time limit] 4000ms (js)
[input] string cell

String consisting of 2 letters - coordinates of the knight on an 8 × 8 chessboard in chess notation.

[output] integer


https://codefights.com/arcade/intro/level-11/pwRLrkrNpnsbgMndb
*/

function translate(pos){
    pos = pos.split('');
    var col = pos[0].charCodeAt(0) - 'a'.charCodeAt(0) + 1;   
    return [col, +pos[1]];
}

function chessKnight(cell) {
    var pos = translate(cell);
    
    var moves = [];
    moves.push ([pos[0]+2, pos[1]+1]);
    moves.push ([pos[0]+2, pos[1]-1]);

    moves.push ([pos[0]-2, pos[1]+1]);
    moves.push ([pos[0]-2, pos[1]-1]);
    
    moves.push ([pos[0]+1, pos[1]+2]);
    moves.push ([pos[0]+1, pos[1]-2]);

    moves.push ([pos[0]-1, pos[1]+2]);
    moves.push ([pos[0]-1, pos[1]-2]);

    moves = moves.filter(
        function(m){
            return (
                (m[0]>0) &&
                (m[1]>0) &&
                (m[0]<9) &&
                (m[1]<9)                
            );
        }
    );
    return moves.length;
}
