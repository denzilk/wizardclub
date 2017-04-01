/*
In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

Example

For

matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]
the output should be

minesweeper(matrix) = [[1, 2, 1],
                       [2, 1, 1],
                       [1, 1, 1]]       
Check out the image below for better understanding:



Input/Output

[time limit] 4000ms (js)
[input] array.array.boolean matrix

A non-empty rectangular matrix consisting of boolean values - true if the corresponding cell contains a mine, false otherwise.

Guaranteed constraints:
2 ≤ matrix.length ≤ 5,
2 ≤ matrix[0].length ≤ 5.

[output] array.array.integer

Rectangular matrix of the same size as matrix each cell of which contains an integer equal to the number of mines in the neighboring cells. Two cells are called neighboring if they share at least one corner.


https://codefights.com/arcade/intro/level-5/ZMR5n7vJbexnLrgaM
*/



function minesweeper(matrix) {
    var out = [];
    var w = matrix[0].length;
    var h = matrix.length;

    // true if at edge
    var top, left, right, bottom;
    for(var i=0; i<h; i++){
        out.push([]);
        top = (i > 0);
        bottom = (i < h-1);
        for(var j=0; j<w; j++){
            left = (j > 0);
            right = (j < w-1);
                        
            val = 0;
            
            if(top){
                val += left ? matrix[i-1][j-1] : 0;
                val += matrix[i-1][j];
                val += right ? matrix[i-1][j+1] : 0;
            }
            val += left ? matrix[i][j-1] : 0;            
            val += right ? matrix[i][j+1] : 0;
                
            if(bottom){
                val += left ? matrix[i+1][j-1] : 0;
                val += matrix[i+1][j];
                val += right ? matrix[i+1][j+1] : 0;
            }
            
            out[i][j] = val;
        }
    }
    
    return out;
}
