/*
Given an array of equal-length strings, check if it is possible to rearrange the strings in such a way that after the rearrangement the strings at consecutive positions would differ by exactly one character.

Example

For inputArray = ["aba", "bbb", "bab"], the output should be
stringsRearrangement(inputArray) = false;
For inputArray = ["ab", "bb", "aa"], the output should be
stringsRearrangement(inputArray) = true.
Input/Output

[time limit] 4000ms (js)
[input] array.string inputArray

A non-empty array of strings of lowercase letters.

Constraints:
2 ≤ inputArray.length ≤ 10,
1 ≤ inputArray[i].length ≤ 15.

[output] boolean



https://codefights.com/arcade/intro/level-7/PTWhv2oWqd6p4AHB9
*/


// this is really a pathfinding problem, but the discussion group 
// recommended brute forcing the solution

function calcdelta(s1,s2){
    var delta = 0;
    for(var i=0; i<s1.length; i++){
        if(s1[i]!=s2[i]){
            delta++;
        }
    }
    return delta;
}

function checkSequence(inputArray, sequence){
    for(i=1; i<sequence.length; i++){
        if (1 != calcdelta(inputArray[sequence[i]], inputArray[sequence[i-1]])){
            return false;
        }
    }
    return true; 
}

// Generating permutation using Heap Algorithm
function heapPermutation(a, size, n, output)
{
    // if size becomes 1 then prints the obtained
    // permutation
    if (size == 1){
        output.push(a.slice());
        return;
    }
 
    var temp;
    for (var i=0; i<size; i++)
    {
        heapPermutation(a, size-1, n, output);
 
        // if size is odd, swap first and last
        // element
        if (size%2==1){
            temp = a[0];
            a[0] = a[size-1];
            a[size-1] = temp;
 
        // If size is even, swap ith and last
        // element
        }else{
            temp = a[i];
            a[i] = a[size-1];
            a[size-1] = temp;            
        }
    }
}


function generateSequences(inputArray){
    var len = inputArray.length;
    var sequences = [];
    var arr=[];
    for(var i=0; i<len; i++){
        arr.push(i);
    }
    heapPermutation(arr, len, len, sequences);
    return sequences;
}

// let's just brute force it
function stringsRearrangement(inputArray) {

    var sequences = generateSequences(inputArray);
                
    for(var i=0; i<sequences.length; i++){
        if(checkSequence(inputArray, sequences[i])){
            return true;
        }
    }
    return false;
}
