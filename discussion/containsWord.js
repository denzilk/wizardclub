


// Given a string and an array of characters, write a method to find if the array contains the characters 
// necessary to form the string. For example, given the string "apple", the array ['p', 'l', 's', 'h', 'a', 'p', 'e'] 
// should return true and array ['f', 'x', 'a', 'e'] should return false.

function run() {
      // Test with the following variables: arr1 does NOT contain the required characters to spell the string, but arr2 does. 

  var word = "disassemble";
  var arr1 = ["d", "n", "i", "k", "t", "t", "a", "q", "w", "o", "b", "x", "x", "m", "z", "q", "i", "j", "k", "n"];
  var arr2 = ["d", "n", "e", "k", "t", "s", "a", "s", "w", "o", "b", "s", "x", "m", "z", "l", "e", "i", "k", "b"];

  var shouldFail = checkWord(word, arr1);
  var shouldPass = checkWord(word, arr2);
  
  console.log('should fail', shouldFail);
  console.log('should pass', shouldPass);  
  
}


function checkWord(testWord, arr){

  var counts={};
  var cursor;
  for(var i=0; i<testWord.length; i++){
    cursor = testWord.charAt(i);
    
    counts[cursor] = (counts[cursor] || 0) + 1;    
  }
  
  console.log(counts);
  
  for(var i=0; i<arr.length; i++){
    cursor = arr[i];
    if(counts[cursor]){
      counts[cursor]--;
    }    
  }
  
  for(i in counts){
    if(counts[i] > 0){
      return false;
    }    
  }
    
  return true;
}

run();
