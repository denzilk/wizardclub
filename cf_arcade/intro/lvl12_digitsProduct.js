/*
Given an integer product, find the smallest positive integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.

Example

For product = 12, the output should be
digitsProduct(product) = 26;
For product = 19, the output should be
digitsProduct(product) = -1.
Input/Output

[time limit] 4000ms (js)
[input] integer product

Guaranteed constraints:
0 ≤ product ≤ 600.

[output] integer


https://codefights.com/arcade/intro/level-12/NJJhENpgheFRQbPRA
*/

function digitsProduct(product) {
    // special cases
    switch(product){
        case 0: return 10;
        case 1: return 1;
    }
    // find highest single digit factors
    var singledigits=[];
    for(var i=9; (product>1) && (i>1); ){
        if ((product % i) == 0){            
            product /= i;
            singledigits.push(i);
        }else{
            i--;
        }
    }    
    
    // single digit prime?
    if (singledigits.length == 0){
        return -1;
    }
    
    singledigits.sort(
        function(a,b){
            return a-b;
        }
    );
    
    return +singledigits.join('');
    
}
