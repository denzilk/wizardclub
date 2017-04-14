/* 

Imagine we have an image. We’ll represent this image as a simple 2D array where every pixel is a 1 or a 0. 
The image you get is known to have a multiple rectangles of 0s on a background of 1s. Write a function 
that takes in the image and returns the coordinates of the rectangle -- either top-left and bottom-right; 
or top-left, width, and height.

 */
 
var image = [
  [1, 0, 0, 1, 1, 1, 1],
  [1, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 1, 0],
  [1, 1, 1, 0, 0, 1, 0],
  [1, 1, 1, 1, 1, 1, 0],
];


// to check if in connected group,
// we'd replace measurerect with a function
// that checks all neighbors, 4 cardinal directions


function measureRect(y, x, image){
  var aw = image[0].length;
  var ah = image.length;  
  
  var height, width;

  height = ah-y;
  for(var i=y; i<ah; i++){
    if(image[i][x] == 1){
      height = i-y;
      break;
    }    
  }
  
  width = aw-x;
  for(var j=x; j<aw; j++){
    if(image[y][j] == 1){
      width = j-x;
      break;
    }    
  }
  
  return {
    topleft: [y,x],
    height: height,
    width: width
  };
}

function pointInRect(y,x, rect){    
  return (y >= rect.topleft[0]) &&
    (y < rect.topleft[0] + rect.height) &&
    (x >= rect.topleft[1]) &&
    (x < rect.topleft[1] + rect.width);    
}


function returnCoords(image){  
  var aw = image[0].length;
  var ah = image.length;
  var rects = [];
  
  var inrect;

  for(var i=0; i<ah; i++){
    for(var j=0; j<aw; j++){
      if(image[i][j] == 0){
        
        inrect = rects.some(
          r => pointInRect(i,j, r)
        )
        
        if(inrect){
          continue;
        }                
        rects.push(measureRect(i,j, image));
      }
    }
  };
    
    
  return rects;
    
}
