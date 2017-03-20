/*

Given a matrix that contains only the characters '0' and '1', find the biggest plus sign (+) composed of 1s and return its rank. Rank, in this case, indicates the length of the plus sign's edges. In order to be a valid plus sign, the edges must be of equal length.

For example, a plus sign with a rank of k in matrix starts at cell (x, y). The plus sign's edges are (x - k, y), (x - k + 1, y), ..., (x + k, y) and (x, y - k), (x, y - k + 1), ..., (x, y + k), all with a length of k.

Example

For

  matrix = ["0010010",
            "1010101",
            "1111111",
            "0010000",
            "0000000"]
the output should be biggestPlus(matrix) = 1.

Here, the biggest plus sign is starts at cell (2, 2) (0-based) and has a rank of 1.

Input/Output

[time limit] 4000ms (js)
[input] array.string matrix

A matrix containing only the symbols '0' and '1'. It is guaranteed that there is at least one '1' in matrix.

Constraints:
1 ≤ inputArray.length ≤ 1000,
1 ≤ inputArray[i].length ≤ 1000.

[output] integer

The rank of the biggest plus sign composed of 1s in matrix.


https://codefights.com/interview/DFGjHcRC44xwzpqid/description

*/



function biggestPlus(matrix){
    var i,j,k;
    var height = matrix.length;
    var width = matrix[0].length;

    var highest = 0, cursor;
    for (i=0; i<height; i++){
        for(j=0; j<width; j++){

            if (matrix[i][j]=='0'){
                continue;
            }

            for(k = 1; ; k++){
                if ( (j-k >= 0) && (matrix[i][j-k]=='1') &&
                     (i-k >= 0) && (matrix[i-k][j]=='1') &&
                     (j+k < width) && (matrix[i][j+k]=='1') &&
                     (i+k < height) && (matrix[i+k][j]=='1') ){
                    if (k > highest){
                        highest = k;
                    }
                }else{
                    break;
                }
            }
        }
    }
    return highest;
}



/*
 function biggestPlus(matrix) {
    var i,j,k;
    var height = matrix.length;
    var width = matrix[0].length;

    var max = width & 1 ? width : width - 1;
    var ok, mid, chk, regexp;

    for( ; max > 0; max-=2){
        regexp = new RegExp('1{'+max+'}');
        mid = Math.floor(max / 2);

        for(i=0; i<height; i++){
            chk = matrix[i].search(regexp);
            j = chk;

            while(chk >= 0){
                ok = true;
                out:
                for(k=mid; k>=0; k--){
                    switch(false){
                        case ((i-k >= 0) && (matrix[i-k][j+mid] == '1')):
                        case ((i+k < height) && (matrix[i+k][j+mid] == '1')):
                            ok = false;
                        default: // fallthrough
                            break out;
                    }
                }
                if(ok){
                    return mid;
                }

                j += (chk + 1);
                chk = matrix[i].slice(j).search(regexp);
            }
        }
    }
    if(max < 0){
        max = 0;
    }
    return max;
}
*/
