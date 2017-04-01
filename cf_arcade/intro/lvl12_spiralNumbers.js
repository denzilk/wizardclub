/*
Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.

Example

For n = 3, the output should be

spiralNumbers(n) = [[1, 2, 3],
                    [8, 9, 4],
                    [7, 6, 5]]
Input/Output

[time limit] 4000ms (js)
[input] integer n

Matrix size, a positive integer.

Constraints:
3 ≤ n ≤ 10.

[output] array.array.integer
https://codefights.com/arcade/intro/level-12/uRWu6K8E7uLi3Qtvx
*/


function spiralNumbers(n) {
    var out=[];

    for(var i=0; i<n; i++){
        out.push([]);
        for(var j=0; j<n; j++){
            out[i].push(0);
        }
    }
    
    var max = n*n;
    var dirs= ['r','d','l','u'];
    var dir = 0;
    var h,v;
    var x=-1, y=0, ty, tx;
    for(i=1; i<=max; ){
        h=0; v=0;
        switch(dirs[dir]){
            case 'r': h = 1; break;
            case 'd': v = 1; break;
            case 'l': h = -1; break;
            case 'u': v = -1; break;
        }
        ty = y+v;
        tx = x+h;
        switch(true){
            case ((tx < 0) || (ty < 0)):
            case ((tx >= n) || (ty >= n)):
            case (out[ty][tx] != 0):
                dir = (dir < dirs.length - 1) ? dir + 1 : 0;
                continue;
        }
        out[ty][tx] = i;
        x=tx;
        y=ty;
        i++;
    }        
    return out;
}
