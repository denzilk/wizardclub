/*
You are given an array of desired filenames in the order of their creation. Since two files cannot have equal names, the one which comes later will have an addition to its name in a form of (k), where k is the smallest positive integer such that the obtained name is not used yet.

Return an array of names that will be given to the files.

Example

For names = ["doc", "doc", "image", "doc(1)", "doc"], the output should be
fileNaming(names) = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"].

Input/Output

[time limit] 4000ms (js)
[input] array.string names

Guaranteed constraints:
5 ≤ names.length ≤ 15,
1 ≤ names[i].length ≤ 15.

[output] array.string

https://codefights.com/arcade/intro/level-12/sqZ9qDTFHXBNrQeLC
*/

function fileNaming(names) {
    var cursor;
    var index;
    for(var i=0; i<names.length; i++){
        cursor = names[i];
        
        index = names.indexOf(cursor);
        if(index < i){
            j = 1;
            do{
                cursor = names[i]+'('+j+')';
                index = names.slice(0,i).indexOf(cursor);
                j++;
            }while (index >= 0);
            
            names[i] = cursor;
        }
    }
    return names;
}
