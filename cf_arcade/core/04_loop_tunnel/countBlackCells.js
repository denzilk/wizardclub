/*
Imagine a white rectangular grid of n rows and m columns divided into two parts by a diagonal line running from the upper left to the lower right corner. Now let's paint the grid in two colors according to the following rules:

    A cell is painted black if it has at least one point in common with the diagonal;
    Otherwise, a cell is painted white.

Count the number of cells painted black.

Example

    For n = 3 and m = 4, the output should be
    countBlackCells(n, m) = 6.

    There are 6 cells that have at least one common point with the diagonal and therefore are painted black.

    For n = 3 and m = 3, the output should be
    countBlackCells(n, m) = 7.

    7 cells have at least one common point with the diagonal and are painted black.

Input/Output

    [time limit] 4000ms (js)

    [input] integer n

    The number of rows.

    Guaranteed constraints:
    1 ≤ n ≤ 105.

    [input] integer m

    The number of columns.

    Guaranteed constraints:
    1 ≤ m ≤ 105.

    [output] integer

    The number of black cells.




https://codefights.com/arcade/code-arcade/loop-tunnel/RcK4vupi8sFhakjnh
*/


function euclid(hi, lo){
    if(!lo){
       return hi; 
    }
    return euclid(lo, hi%lo);
}

function countBlackCells(n, m) {
    var lo = n;
    var hi = m;
    if (n > m){
        lo = m;
        hi = n;        
    }
    var gcf = euclid(hi, lo);
    console.log('cGCF = ' + gcf);
    
    // not intuitively sure why this works.
    return n + m + gcf - 2;
    
    /*
    n/= gcf;
    m/= gcf;

    var intercept = 0;
    var blocks = {'0_0':true};

    var yx = n/m;
    var xy = m/n;
    
    for(var x=0; x<m; x++){
        intercept = Math.floor(yx * x);
        blocks[intercept + '_' + (x-1)] = true;
        blocks[intercept + '_' + x] = true;
    }
    for(var y=0; y<n; y++){
        intercept = Math.floor(xy * y);
        blocks[(y-1) + '_' + intercept] = true;
        blocks[y + '_' + intercept] = true;        
    }
    
//    console.log(blocks);
    var len = Object.keys(blocks).length;
    return (len * gcf) - 2;    
*/    
}
