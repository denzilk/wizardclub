/*

A rectangle with sides equal to even integers a and b is drawn on the Cartesian plane. Its center (the intersection point of its diagonals) coincides with the point (0, 0), but the sides of the rectangle are not parallel to the axes; instead, they are forming 45 degree angles with the axes.

How many points with integer coordinates are located inside the given rectangle (including on its sides)?

Example

For a = 6 and b = 4, the output should be
rectangleRotation(a, b) = 23.

The following picture illustrates the example, and the 23 points are marked green.



Input/Output

[time limit] 4000ms (js)
[input] integer a

A positive even integer.

Guaranteed constraints:
2 ≤ a ≤ 50.

[input] integer b

A positive even integer.

Guaranteed constraints:
2 ≤ b ≤ 50.

[output] integer

The number of inner points with integer coordinates.


https://codefights.com/arcade/code-arcade/labyrinth-of-nested-loops/tuKA5f3zpzkKKejJx
*/


// fyi: this solution is overly general.
// it handles any sided convex polygons rotated by any angle.

function cross_product(a, b){
    return a[0]*b[1] - a[1]*b[0];
}    

function vector_subtract(a, b){
    return [a[0]-b[0], a[1]-b[1]];
}

function rotate_points(angle, points_array){
    var theta = angle * Math.PI / 180;
    var cosAng = Math.cos(theta);
    var sinAng = Math.sin(theta);
    var rot = [
        [cosAng, sinAng],
        [-sinAng, cosAng]
    ];

    // rotate points
    return points_array.map(
        (p) => {
            var nx = (p[0] * rot[0][0]) + (p[1] * rot[0][1]);
            var ny = (p[0] * rot[1][0]) + (p[1] * rot[1][1]);
            return [nx, ny];
        }
    );
    
}


function rectangleRotation(a, b) {    
    var halfx = b/2;
    var halfy = a/2;
    
    // generate corners clockwise    
    var corners = rotate_points(45, [
        [-halfx, -halfy],
        [-halfx, halfy],
        [halfx, halfy],       
        [halfx, -halfy]                
    ]);
    
    //get bounding box vectors
    var sides = [];
    for(var i=0; i<corners.length; i++){
        var next = (i + 1) % corners.length;
        sides.push(vector_subtract(corners[next], corners[i]));
    }
    
    // find maxes
    var maxX = Math.floor(corners.reduce(
        (a, c) => (c[0] > a) ? c[0] : a
    , 0));
    var maxY = Math.floor(corners.reduce(
        (a, c) => (c[1] > a) ? c[0] : a
    , 0));
    
    
    // check every point within bounds
    // with crossproduct to sides      
    var vector, cross, inside = 0;
    for(var i=-maxX; i<=maxX; i++){
        for(var j=-maxY; j<=maxY; j++){
            for(var k=0; k<sides.length; k++){
                vector = vector_subtract([i,j], corners[k]);
                cross = cross_product(vector, sides[k]);
                if(cross < 0 ){
                    break;
                }
            }
            if(k == sides.length){
                inside++;
            }            
        }
    }
    
    return inside;
}
