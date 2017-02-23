/*

Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all 
odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. 
Every additional number in the sequence is the sum of the 
two previous numbers. The first six numbers of the Fibonacci 
sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because 
all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

https://www.freecodecamp.com/challenges/sum-all-odd-fibonacci-numbers
*/


function sumFibs(num) {
  var fibs=[0,1];
 
  // generate all fib numbers
  for( var nextfib = 1, i=2; 
       nextfib <= num; 
       i++, nextfib = fibs[i-1] + fibs[i-2] ){

    fibs.push(nextfib);    
  }
  
  // only sum odd numbers...
  // yes we could combine these steps. 
  // but i think this is more readable.  
  var total = fibs.reduce(function(a, b) {
    return (b & 1) ? a+b : a;
  }, 0);
  
  return total;
  
}

sumFibs(4);
