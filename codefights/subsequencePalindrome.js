/*
Find the longest subsequence palindrome in a given array a. The longest subsequence palindrome of array a is a subsequence of indices i1 < i2 < ... < ik, where ai1ai2...aik is a palindrome.

Example

For a = [1, 2, 4, 1], the output should be
longestSubsequencePalindrome(a) = 3.

The longest subsequence palindrome here is either 1, 2, 1 or 1, 4, 1, both of which have a length of 3.

For a = [1, 2, 3], the output should be
longestSubsequencePalindrome(a) = 1.

Input/Output

[time limit] 4000ms (js)
[input] array.integer a

Constraints:
1  a.length  103,
1  a[i]  109.

[output] integer

The length of the longest subsequence palindrome in a.

https://codefights.com/skill-test/PBSHhgQwRDNYqCeck

*/






function longestSubsequencePalindrome(a) {
    console.log('READING '+a);
    var length = a.length
    switch(length){
        case 0:
        case 1:    
            console.log('return '+ length);
            return length;
        case 2:
            var twofer = (a[0] == a[1]) + 1;            
            console.log('return '+ twofer);
            return twofer;
/*        case 3:
            if(a[0] == a[2]) return 3;
            if(a[0] == a[1]) return 2;
            if(a[1] == a[2]) return 2;
            return 1;
            //return twofer;
*/
    }
    
    var i, j, head, tail;
    var substring, check, longest = 1;
    var checked = {};
    var lastchecked = length -1;
    var counts = {};
    
    for(i = 0; i < length; i++){
        head = a[i];
        counts[head] = counts[head] || 0;
        counts[head]++;
    }
        
    for(i = 0; i < length-(longest+1); i++){
        head = a[i];
        
        if(counts[head]<2){
            continue;
        }
        
       console.log('comparing '+head +' at '+ i);
        j= checked[head] || lastchecked;
       console.log(j);
        
        for( ; j>i; j--){
             tail = a[j];
            console.log('... to '+tail +' at '+ j);
           
            if(head == tail){                
                substring = a.slice(i+1, j);
                check = 2 + longestSubsequencePalindrome(substring);
                if(check > longest){
                    longest = check;
                }
                break;
            }else{
                if(!checked[tail]){
                    checked[tail] = j;
                    lastchecked = j;
                }
            }
        }
        
    }
    console.log('return '+ longest);
    return longest;
}
    
        
        
            
