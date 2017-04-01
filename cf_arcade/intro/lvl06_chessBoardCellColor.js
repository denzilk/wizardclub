/*
Given two cells on the standard chess board, determine whether they have the same color or not.

Example

For cell1 = "A1" and cell2 = "C3", the output should be
chessBoardCellColor(cell1, cell2) = true.



For cell1 = "A1" and cell2 = "H3", the output should be
chessBoardCellColor(cell1, cell2) = false.



Input/Output

[time limit] 4000ms (js)
[input] string cell1
[input] string cell2
[output] boolean

true if both cells have the same color, false otherwise.


https://codefights.com/arcade/intro/level-6/t97bpjfrMDZH8GJhi
*/


function translate(cell){
    cell = cell.split('');
    var x = Number(cell[0].charCodeAt(0));
    var y = Number(cell[1]);
    return [x, y];
}

function chessBoardCellColor(cell1, cell2) {
    var c1 = translate(cell1);
    var c2 = translate(cell2);
    
    var ydiff = c2[1] - c1[1];
    var xdiff = c2[0] - c1[0];
   
    return !((xdiff + ydiff) & 1);

}
