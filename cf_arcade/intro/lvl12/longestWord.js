/*
Define a word as a sequence of consecutive letters. Find the longest word from the given string.

Example

For text = "Ready, steady, go!", the output should be
longestWord(text) = "steady".

Input/Output

[time limit] 4000ms (js)
[input] string text

Guaranteed constraints:
4 ≤ text.length ≤ 50.

[output] string

The longest word from text. It's guaranteed that there is a unique output.


https://codefights.com/arcade/intro/level-12/s9qvXv4yTaWg8g4ma
*/


function longestWord(text) {
    var words = text.split(/[^\w]+/);
    var longest = words.reduce(
        function(acc,val){
            if(val.length > acc.length){
                return val;
            }
            return acc;
        }
    ,'');
    return longest;
}
