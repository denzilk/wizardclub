/*
You have two integer arrays, a and b, and an integer target value v. Determine whether there is a pair of numbers, where one number is taken from a and the other from b, that can be added together to get a sum of v. Return true if such a pair exists, otherwise return false.

Example

For a = [1, 2, 3], b = [10, 20, 30, 40], and v = 42, the output should be
sumOfTwo(a, b, v) = true.

Input/Output

    [time limit] 4000ms (js)

    [input] array.integer a

    An array of integers.

    Constraints:
    0  a.length  105,
    -109  a[i]  109.

    [input] array.integer b

    An array of integers.

    Constraints:
    0  b.length  105,
    -109  b[i]  109.

    [input] integer v

    Constraints:
    -109  v  109.

    [output] boolean

    true if there are two elements from a and b which add up to v, and false otherwise.
*/




function sumOfTwo(a, b, v) {
    var solves = {};
    for(var i =0; i< a.length; i++){
        solves[v-a[i]]=true;
    }
    for(i = 0; i< b.length; i++){
        if(solves[b[i]]){
            return true;
        }
    }
    return false;
    
//     var test = b;
//     a.sort((a,b) => a-b);
    
//     for(var i = 0; i < a.length; i++){
//         test = test.filter(num => (a[i] + num <= v));

//         if(test.length == 0){
//             return false;
//         }
        
//         if (test.indexOf(v - a[i]) >= 0){
//            return true;
//         }
              
//     }
//     return false;
    
}
