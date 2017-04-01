/*
Last night you had to study, but decided to party instead. Now there is a black and white photo of you that is about to go viral. You cannot let this ruin your reputation, so you want to apply box blur algorithm to the photo to hide its content.

The algorithm works as follows: each pixel x in the resulting image has a value equal to the average value of the input image pixels' values from the 3 × 3 square with the center at x. All pixels at the edges are cropped.

As pixel's value is an integer, all fractions should be rounded down.

Example

For

image = [[1, 1, 1], 
         [1, 7, 1], 
         [1, 1, 1]]
the output should be boxBlur(image) = [[1]].

In the given example all boundary pixels were cropped, and the value of the pixel in the middle was obtained as (1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) / 9 = 15 / 9 = ~rounded down~ = 1.

Input/Output

[time limit] 4000ms (js)
[input] array.array.integer image

An image is stored as a rectangular matrix of non-negative integers.

Guaranteed constraints:
3 ≤ image.length ≤ 10,
3 ≤ image[0].length ≤ 10,
0 ≤ image[i][j] ≤ 255.

[output] array.array.integer

A blurred image.

https://codefights.com/arcade/intro/level-5/5xPitc3yT3dqS7XkP
*/


function boxBlur(image) {
    var w = image[0].length-2;
    var h = image.length-2;
    
    var val;
    var out = [];
    for(var i=0; i<h; i++){
        out.push([]);
        for(var j=0; j<w; j++){
            val = 0;
            for(var y=i; y<i+3; y++){
                for(var x=j; x<j+3; x++){
                    val += image[y][x];
                }
            }
            val = Math.floor(val/9);
            out[i].push(val);            
        }
    }
    return out;
}
