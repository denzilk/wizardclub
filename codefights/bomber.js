/*

Each cell in a 2D grid contains either a wall ('W') or an enemy ('E'), or is empty ('0'). Bombs can destroy enemies, but walls are too strong to be destroyed. A bomb placed in an empty cell destroys all enemies in the same row and column, but the destruction stops once it hits a wall.

Return the maximum number of enemies you can destroy using one bomb.

Note that your solution should have O(field.length · field[0].length) complexity because this is what you will be asked during an interview.

Example

For

field = [["0", "0", "E", "0"],
         ["W", "0", "W", "E"],
         ["0", "E", "0", "W"],
         ["0", "W", "0", "E"]]
the output should be
bomber(field) = 2.

Placing a bomb at (0, 1) or at (0, 3) destroys 2 enemies.

Input/Output

[time limit] 4000ms (js)
[input] array.array.char field

A rectangular matrix containing characters '0', 'W' and 'E'.

Constraints:
0 ≤ field.length ≤ 100,
0 ≤ field[i].length ≤ 100.

[output] integer


https://codefights.com/interview/d8oFgW9dnFgTrfhsX/description

*/


var highest = 0;

function mark(i, j, field, zone){
    if (field[i][j] == 'W'){
        return false;
    }
    if(field[i][j] == '0'){
        zone[i][j] = zone[i][j] || 0;
        zone[i][j]++;
        
        if(zone[i][j] > highest){
            highest = zone[i][j];
        }
    }
    return true;    
}

function bomber(field) {
    var i,j,k;

    var height = field.length;
    if(height<1){
        return 0;
    }
    var width = field[0].length;
    
    var cursor, zone = [];
    for(i=0; i<height; i++){
        cursor = [];
        for(j=0; j<width; j++){
            cursor.push(0);
        }
        zone.push(cursor);        
    }
    for(i=0; i<height; i++){
        for(j=0; j<width; j++){
            if(field[i][j]=='E'){
                
                for(k=i-1; k>=0; k--){
                    if(!mark(k, j, field, zone)){
                        break;
                    }
                }
                
                for(k=i+1; k<height; k++){
                    if(!mark(k, j, field, zone)){
                        break;                        
                    }
                }

                for(k=j-1; k>=0; k--){
                    if(!mark(i, k, field, zone)){
                        break;
                    }
                }
                
                for(k=j+1; k<width; k++){
                    if(!mark(i, k, field, zone)){
                        break;
                    }
                }   
            }   
        }  
    }    
    return highest;
}

