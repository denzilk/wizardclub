/*
Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.

This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

Example

For the first example below, the output should be true. For the other grid, the output should be false: each of the nine 3 × 3 sub-grids should contain all of the digits from 1 to 9.



Input/Output

[time limit] 4000ms (js)
[input] array.array.integer grid

A matrix representing 9 × 9 grid already filled with numbers.

[output] boolean

true if the given grid represents a correct solution to Sudoku, false otherwise.

https://codefights.com/arcade/intro/level-12/tQgasP8b62JBeirMS
*/


function sudoku(grid) {
    var rows=[];
    var cols=[];
    var boxes=[];
    
    var i, j, k, cursor;
    for(i=0; i<9; i++){
        rows.push({});
        cols.push({});
        boxes.push({});        
    }
    
    for(i=0; i<9; i++){
        for(j=0; j<9; j++){
            k = (Math.floor(i/3) * 3) + Math.floor(j/3);
                
            cursor = grid[i][j];
            if(
                (rows[i][cursor]) ||
                (cols[j][cursor]) ||
                (boxes[k][cursor]) ){            
                return false;
            }
            rows[i][cursor] = true;
            cols[j][cursor] = true;            
            boxes[k][cursor] = true;            
        }
    }
    
    return true;
}
