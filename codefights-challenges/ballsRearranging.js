/*

An infinite number of boxes are arranged in a row and numbered from left to right. The first box on the left is number 1, the next box is number 2, etc. n balls are placed in n of the boxes, and there can only be one ball per box. You want to organize the balls, so you decide to arrange all the balls next to each other. They should occupy a contiguous set of boxes. You can take one ball and move it into an empty box in one move.

Given an array balls that indicates the numbers of the boxes in which the balls are placed, find the minimum number of moves needed to organize the balls.

Example

For balls = [6, 4, 1, 7, 10], the output should be
ballsRearranging(balls) = 2.

In this example, the minimum number of moves needed to arrange the balls next to each other is 2. You could move the ball in box 1 to box 5 and the ball in box 10 to box 8 (or to box 3).

Input/Output

[time limit] 4000ms (js)
[input] array.integer balls

An array of balls. The ith element indicates the number of the box where the ith ball is placed. It is guaranteed that all the elements in the array are distinct.

Constraints:
1 ≤ balls.length ≤ 105,
1 ≤ balls[i] ≤ 109.

[output] integer

The minimum number of moves needed to organize the balls into a contiguous set of boxes.

https://codefights.com/interview/zR3sSovjZ4ny2Me2A

*/


function ballsRearranging(balls) {
    balls.sort(function(a,b){
        return a-b;
    });

    var length = balls.length;    
    var spread, seqlen, holes, left, shortest = length;
    var count=0, lastgood;
    var head, tail = 0;
    
    for(head=0; head<length; head++){
        for( ; tail<length; tail++){
            seqlen = tail - head;
            spread = balls[tail] - balls[head];
            holes = spread - seqlen;
            left = length - (1 + seqlen);
            
            if(holes > left){                
                left = lastgood;
                break;
            }
            lastgood = left;
                      
        }

        if(left < shortest){
            shortest = left;
        }        
    }
    return shortest;
}

