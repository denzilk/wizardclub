/*
Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

Example

For

matrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]]
the output should be
differentSquares(matrix) = 6.

Here are all 6 different 2 × 2 squares:

1 2
2 2
2 1
2 2
2 2
2 2
2 2
1 2
2 2
2 3
2 3
2 1
Input/Output

[time limit] 4000ms (js)
[input] array.array.integer matrix

Guaranteed constraints:
1 ≤ matrix.length ≤ 100,
1 ≤ matrix[i].length ≤ 100,
0 ≤ matrix[i][j] ≤ 9.

[output] integer

The number of different 2 × 2 squares in matrix.

https://codefights.com/arcade/intro/level-12/fQpfgxiY6aGiGHLtv
*/


function differentSquares(matrix) {
    var w = matrix[0].length;
    var h = matrix.length;
    
    var cursor;
    var rects={};
    for (var i=1; i<h; i++){
        for (var j=1; j<w; j++){
            cursor = 
                matrix[i-1][j-1] + ':' +
                matrix[i-1][j] + ':' +
                matrix[i][j-1] + ':' +
                matrix[i][j];
            rects[cursor] = true;
        }
    }
    
    return Object.keys(rects).length;
}

