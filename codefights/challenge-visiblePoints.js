/*
Given an array of points on a 2D plane, find the maximum number of points that are visible from point (0, 0) with a viewing angle that is equal to 45 degrees.

Example

For

  points = [[1, 1], [3, 1], [3, 2], [3, 3],
            [1, 3], [2, 5], [1, 5], [-1, -1],
            [-1, -2], [-2, -3], [-4, -4]]
the output should be visiblePoints(points) = 6.

This visualization shows how these 6 points can be viewed:



Input/Output

[time limit] 4000ms (js)
[input] array.array.integer points

The array of points. For each valid i, points[i] contains exactly 2 elements and represents the ith point, where points[i][0] is the x-coordinate and points[i][1] is the y-coordinate. It is guaranteed that there are no points located at (0, 0) and there are no two points located at the same place.

Constraints:
1  points.length  105,
1  points[i].length = 2,
-107  points[i][j]  107.

[output] integer

The maximum number of points that can be viewed from point (0, 0) with a viewing angle that is equal to 45 degrees.

https://codefights.com/interview/wjewD7BPuQDhfa5yx
*/



function visiblePoints(points) {
    var angle = 45;
    var numpoints = points.length;
    if(numpoints == 1){
        return 1;
    }
    // convert all points to an angle in degrees
    var pipi = Math.PI + Math.PI;
    var atan, angles = [];
    for(var i = 0; i < numpoints; i++){
        atan = Math.atan2(points[i][1], points[i][0]);
        if (atan < 0){
            atan += pipi
        }        
        angles.push(atan * 180 / Math.PI);
    }
    angles.sort(function(a, b){
        return a-b;
    });
    
    // calculate deltas
    var deltas = []
    for(var i = 1; i < numpoints; i++){
        deltas.push(angles[i] - angles[i-1]);
    }
    
    // keep a record of whether a point is visible within 
    // the view range starting at each point 
    var arc = 0, counter = 0, maxseen = -1;
    var start = 0, end = 0;

    numpoints = deltas.length;
    while(end < numpoints){
        arc += (deltas[end]);
        console.log(start + ','+end +'= '+arc);
        
        while(arc > angle){
            arc -= (deltas[start]);
            start++;           
            console.log(start + ','+end +'= '+arc);
        }
                
        counter = (end - start) + 1;        
        if(counter > maxseen){
            maxseen = counter;
            console.log('MAXSEEN =' + maxseen);
        }
        end++;
    }
    maxseen++;
            
    return maxseen;
}

/*
function visiblePoints(points) {
    var angle = 45;
    
    // convert all points to an angle in degrees
    var pipi = Math.PI + Math.PI;
    var angles = [];
    var atan, numpoints = points.length;
    for(var i = 0; i < numpoints; i++){
        atan = Math.atan2(points[i][1], points[i][0]);
        if (atan < 0){
            atan += pipi
        }        
        angles.push(atan * 180 / Math.PI);
    }
    angles.sort();
    
    // keep a record of whether a point is visible within 
    // the view range starting at each point
    var arc, visible;   
    var counter, maxseen = 0;
    for(var i=0; i<numpoints; i++){
        counter = 1; // always sees itself
        
        for(var j=i+1; j<numpoints; j++){
            arc = (angles[j] - angles[i]);
            visible = (arc >=0 && arc <= angle)
            
            if(!visible){
                break;
            }         
            counter++;
        }
        if(counter > maxseen){
            maxseen = counter;
        }
    }
        
    return maxseen;
}
*/


/*function visiblePoints(points) {
    // figure out our view range
    var angle = 45;
    var range = (angle * Math.PI / 180).toPrecision(7);
    
    // convert all points to an angle in radians
    pipi = Math.PI + Math.PI;
    var radians = points.map(function(p){
        var atan = Math.atan2(p[1], p[0]);
        if (atan < 0){
            atan += pipi
        }
        return atan;    
    }).sort();
    
    // keep a record of whether a point is visible within 
    // the view range starting at each point
    var arc, visible;
    var numpoints = points.length;
    var counter, maxseen = 0;
    for(var i=0; i<numpoints; i++){
        counter = 1; // always sees itself
        
        for(var j=i+1; j<numpoints; j++){
            arc = (radians[j] - radians[i]).toPrecision(7);
            visible = arc >=0 && arc <= range
            
            if(!visible){
                break;
            }         
            counter++;
        }
        if(counter > maxseen){
            maxseen = counter;
        }
    }
        
    return maxseen;
    
}*/
