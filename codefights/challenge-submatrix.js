/*

Given a rectangular matrix of integers and integers n and m, we are looking for the submatrix of size n  m that has the maximal sum among all submatrices of the given size.

Example

For

matrix = [[1, 12, 11, 10],
          [4,  3,  2,  9],
          [5,  6,  7,  8]]

n = 2 and
m = 1, the output should be
maxSubmatrixSum(matrix, n, m) = 19.

Input/Output

    [time limit] 4000ms (js)

    [input] array.array.integer matrix

    2-dimensional array of integers representing a rectangular matrix.

    Constraints:
    1  matrix.length  5,
    1  matrix[0].length  5,
    -15  matrix[i][j]  15.

    [input] integer n

    A positive integer not greater than the number of matrix rows.

    Constraints:
    1  n  matrix.length.

    [input] integer m

    A positive integer not greater than the number of matrix columns.

    Constraints:
    1  m  matrix[i].length.

    [output] integer

    The sum of all elements in the desired n  m submatrix.

*/



    function maxSubmatrixSum(matrix, n, m) {
        var i,j,k,l;
        var highest= -16, temp;


        for(i = 0; (i + n) <= matrix.length; i++){
            for(j = 0; j + m <= matrix[0].length ; j++){
                var temp = 0;

                for(k = i; k < i+n ; k++){
                    for(l = j; l < j+m ; l++){
                        console.log(k + ','+l+'='+matrix[k][l]);
                        temp += matrix[k][l];
                    }
                }
             
                if(temp > highest){
                    highest = temp;
                }

            }
        }

        return highest;
    }

