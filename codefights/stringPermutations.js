/*
Avoid using C++'s std::next_permutation or similar features in other languages to solve this challenge. Implement the algorithm yourself, since this is what you would be asked to do during a real interview.

Given a string s, find all its potential permutations. The output should be sorted in lexicographical order.

Example

    For s = "CBA", the output should be
    stringPermutations(s) = ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"];
    For s = "ABA", the output should be
    stringPermutations(s) = ["AAB", "ABA", "BAA"].

Input/Output

    [time limit] 4000ms (js)

    [input] string s

    A string containing only capital letters.

    Constraints:
    1 ≤ s.length ≤ 5.

    [output] array.string

    All permutations of s, sorted in lexicographical order.




https://codefights.com/interview/fwMMv4mASRuhxPzcP/description
*/

// Generating permutation using Heap Algorithm
function heapPermutation(a, size, n, output)
{
    if (size == 1){
        output.push(a.slice());
        return;
    }
 
    var temp, swap;
    for (var i=0; i<size; i++)
    {
        heapPermutation(a, size-1, n, output);
 
        // if size is odd, swap first and last
        // If size is even, swap ith and last
        swap = (size & 1) ? 0 : i;

        temp = a[swap];
        a[swap] = a[size-1];
        a[size-1] = temp;
    }
}


function stringPermutations(s) {
    var out =[];
    heapPermutation(s.split(''), s.length, s.length, out);
    return out
        .map(s => s.join('')) 
        .filter((s,i,a) => i == a.indexOf(s))
        .sort();
}
