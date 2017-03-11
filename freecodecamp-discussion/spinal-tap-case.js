/*
Spinal Tap Case 
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// https://www.freecodecamp.com/challenges/spinal-tap-case
*/


function spinalCase(str) {
  str = str.replace(/[\s\_]+/g,'-');
  str = str.replace(/([a-z])([A-Z])/g, "$1-$2");
  return str.toLowerCase();
}

spinalCase("thisIsSpinalTap");
