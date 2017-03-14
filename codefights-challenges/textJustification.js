/*
Given an array of words and a length L, format the text such that each line has exactly L characters and is fully justified on both the left and the right. Words should be packed in a greedy approach; that is, pack as many words as possible in each line. Add extra spaces when necessary so that each line has exactly L characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right. For the last line of text and lines with one word only, the words should be left justified with no extra space inserted between them.

Example

For
words = ["This", "is", "an", "example", "of", "text", "justification."]
and L = 16, the output should be

textJustification(words, L) = ["This    is    an",
                               "example  of text",
                               "justification.  "]
Input/Output

[time limit] 4000ms (js)
[input] array.string words

An array of words. Each word is guaranteed not to exceed L in length.

Constraints:
1  words.length  150,
0  words[i].length  L.

[input] integer L

The length that all the lines in the output array should be.

Constraints:
1  L  60.

[output] array.string

The formatted text as an array containing lines of text, with each line having a length of L.

https://codefights.com/interview/ibANT8ZGc3shACBRF/description

*/


function generateLine(linearr, L){
  var spaces = ' ';
  var extra = 0;
    var suffix = '';

  if(linearr.length > 1){
      var sofar = linearr.join('').length;
      var nspaces = parseInt((L - sofar) / (linearr.length - 1));
      spaces = '';
      for(var k=0;k<nspaces;k++){
         spaces += ' ';
      }
      extra = (L - sofar) % (linearr.length - 1);
  
      for(var j=0; j<linearr.length; j++){
          if(extra > 0){
              linearr[j] += ' ';
          }
          extra--;
      }
  }else{

      var nspaces = L - linearr.join(' ').length;
      for(k=0;k<nspaces;k++){
           suffix += ' ';
      }
  }

  var line = linearr.join(spaces) + suffix;
  return line;  
}

function textJustification(words, L) {
    var length = words.length;
    var outarr = [], linearr=[];
    var line;
    var i, j, k;

    for(i=0; i<length;){
        linearr.push(words[i]);
        if(linearr.join(' ').length <= L){
            i++;
            continue;
        }
        linearr.pop();        
        line = generateLine(linearr, L);
        linearr = [];

        outarr.push(line);
    }

    if(linearr.length){
        var suffix = '';
        var nspaces = L - linearr.join(' ').length;
        for(k=0;k<nspaces;k++){
           suffix += ' ';
        }
        line = linearr.join(' ') + suffix;
        outarr.push(line);
    }
    return outarr;
}

