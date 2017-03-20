/*
You are given a grid filled with non-negative integer numbers, and a chip is placed on the top left cell. On each turn the chip can be moved either to the right neighboring cell or to the bottom neighboring cell. The cost of the move is equal to the number written on the resulting cell.

There is also an added cost if you change direction between two consecutive moves. In order to change the direction you'll need to pay an additional cost of 10.

What is the minimum amount of points needed to reach the right bottom corner of the grid?

Assume that you don't pay for standing on the upper left cell in the beginning, so the number on that cell is not used.

It is guaranteed that each of all possible paths will cost less than 107 points.

Example

For

grid = [[ 0,  0, 99, 99, 99],
        [99,  0,  0,  0, 99],
        [99, 99, 99,  0, 99],
        [99, 99, 99,  0, 99],
        [99, 99, 99,  0,  0]]
the output should be
chipMoving(grid) = 40.

You could avoid all the 99 spots but you would need to change direction 4 times.

Input/Output

[time limit] 4000ms (js)
[input] array.array.integer grid

A matrix of non-negative integers.

Constraints:
1  grid.length  10,
1  grid[0].length  10,
0  grid[i][j]  2000.

[output] integer
*/

var DOWN = 0, RIGHT = 1;
var Y = 0, X = 1, DIR = 2;

function validPositions(pos, max){
    var moves = []; 
    [X,Y].forEach(function(coord){
        var testmove = pos.slice();
        testmove[coord]++;
        testmove[DIR] = coord; // add the direction as the 3rd element
        if(testmove[coord]< max[coord]){
            moves.push(testmove);
        }        
    });
    return moves;
}

function generateMoveNodes(pos, grid, max){
    var node = {}
    node.x = pos[X];
    node.y = pos[Y];
    if (typeof pos[DIR] != 'undefined'){
        node.dir = pos[DIR]; 
    }    
    node.cost = grid[pos[Y]][pos[X]] ; 
    node.moves = validPositions(pos,max).map(function(newpos){        
       return generateMoveNodes(newpos, grid, max); 
    })
    
    var mscore, move, leastscore=-1;
    var changepenalty = 0;
    var printy = (node.x == 3 && node.y == 4);

    for(var i=0; i< node.moves.length; i++){

        move = node.moves[i];
        mscore = move.score;
                
        if((typeof node.dir != 'undefined') && (node.dir != move.dir)){
            mscore += 10;
        }

        if(leastscore < 0){
            leastscore = mscore;
            continue;
        }
        
        if(mscore < leastscore){
            leastscore = mscore;
        }
    }
    node.score = node.cost;
    if(leastscore > 0){
        node.score += leastscore
    }

    return node;
}

function chipMoving(grid) {
    var chip = [0,0]; // y, x    
    var max = [grid.length, grid[0].length];

    var root = generateMoveNodes(chip, grid, max);
    // no cost for starting block
    root.score -= root.cost;

    return root.score;
}

var grid= [[0,0,99,99,99], 
 [99,0,0,0,99], 
 [99,99,99,0,99], 
 [99,99,99,0,99], 
 [99,99,99,0,0]];
