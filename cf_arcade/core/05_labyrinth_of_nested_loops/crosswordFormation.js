/*
You're a crossword fanatic, and have finally decided to try and create your own. However, you also love symmetry and good design, so you come up with a set of rules they should follow:

the crossword must contain exactly four words;
these four words should form four pairwise intersections;
all words must be written either left-to-right or top-to-bottom;
the area of the rectangle formed by empty cells inside the intersections isn't equal to zero.
Given 4 words, find the number of ways to make a crossword following the above-described rules. Note that two crosswords which differ by rotation are considered different.

Example

For words = ["crossword", "square", "formation", "something"], the output should be
crosswordFormation(words) = 6.

The six crosswords can be formed as shown below:

  f                         f                             f
  o                     c r o s s w o r d     c r o s s w o r d
c r o s s w o r d           r   o                   q     r
  m   q                     m   m                   u     m
  a   u            ;  s q u a r e          ;        a     a
  t   a                     t   t                   r     t
  i   r                     i   h             s o m e t h i n g
s o m e t h i n g           o   i                         o
  n                         n   n                         n
                                g                               
                                                              
    c         s               s                                      
f o r m a t i o n       c     q               c         s          
    o         m         r     u               r         o      
    s q u a r e       f o r m a t i o n       o         m            
    s         t    ;    s     r            ;  s q u a r e                  
    w         h         s o m e t i n g       s         t         
    o         i         w                     w         h     
    r         n         o                   f o r m a t i o n            
    d         g         r                     r         n         
                        d                     d         g             
Input/Output

[time limit] 4000ms (js)
[input] array.string words

An array of distinct strings, the words you need to use in your crossword.

Guaranteed constraints:
words.length = 4,
3 ≤ words[i].length < 15.

[output] integer

The number of ways to make a correct crossword of the desired formation.



https://codefights.com/arcade/code-arcade/labyrinth-of-nested-loops/W5Sq7taLSzNHh8GiF
*/

/*
function checkCombo(tp,bt,lf,rt, matches){
    
    var count = 0;
    var mtl = matches[tp][lf];
    var mtr = matches[tp][rt];
    
    var mlt = matches[lf][tp];
    var mrt = matches[rt][tp];
    
    var mbl = matches[bt][lf];
    var mbr = matches[bt][rt]; 
    
    var mlb = matches[lf][bt];
    var mrb = matches[rt][bt];
    var width, height;

    // split top by widths
    var topwidths = {}
    for (var i=0; i<mtl.length; i++){
        for (var j=0; j<mtr.length; j++){
            
            width = mtr[j] - mtl[i]; // for every top two corners ...
            if (width < 2) continue; // area inside > 0
            loops++;
            // record the left and right intersection indices;
            topwidths[width] = topwidths[width] || [];
            topwidths[width].push([mlt[i], mrt[j]]) 
        }
    }  
    
    // do same for bottoms
    var botwidths = {}
    for (var i=0; i<mbl.length; i++){
        for (var j=0; j<mbr.length; j++){
            
            width = mbr[j] - mbl[i]; // for every bottom two corners ...
            if (width < 2) continue; // area inside > 0
            loops++;
            // record the left and right intersection indices;
            botwidths[width] = botwidths[width] || [];
            botwidths[width].push([mlb[i], mrb[j]]) 
        }
    }

    // compare matching widths
    var bw = Object.keys(botwidths);
    
    var twi, bwj, hl, hr;
    for (var width in topwidths){
        if(bw.indexOf(width) < 0) continue;
        
        for(i=0; i<topwidths[width].length; i++){
            twi = topwidths[width][i];
            for(j=0; j<botwidths[width].length; j++){
                loops++;
                bwj = botwidths[width][j];
                
                hl = bwj[0] - twi[0];
                hr = bwj[1] - twi[1];
                
                if ((hl == hr) && (hl > 1)){
                    count++;                    
                }
            }            
        }
        
    }   
    
    return count;
}
*/

/*
function checkCombo(tp,bt,lf,rt, matches){
    
    var count = 0;
    var mtl = matches[tp][lf];
    var mtr = matches[tp][rt];
    
    var mlt = matches[lf][tp];
    var mrt = matches[rt][tp];
    
    var mbl = matches[bt][lf];
    var mbr = matches[bt][rt]; 
    
    var mlb = matches[lf][bt];
    var mrb = matches[rt][bt];
    var width, height;
   
    for (var i=0; i<mtl.length; i++){
        for (var j=0; j<mtr.length; j++){
            width = mtr[j] - mtl[i]; // for every top two corners ...
            if (width < 2) continue; // area inside > 0
            
            for(var k=0; k<mlb.length; k++){
                height = mlb[k] - mlt[i]; // for every left side ...
                if(height < 2) continue;  // area inside > 0
                
                for(var l=0; l<mrb.length; l++){
                    loops++;
                    if( ((mrb[l] - mrt[j]) == height) && // look for right side of equal height                    
                        ((mbr[l] - mbl[k]) == width) ){ // and a bottom of equal width
    
                        // console.log('  t  b  l  r');
                        // console.log(Array.prototype.slice.apply(arguments,[0,-1]));
                        // console.log('tl: '+mtl[i] + ', tr: '+mtr[j]);
                        // console.log('bl: '+mbl[k] + ', br: '+mbr[l]+"\n");
                        count++;
                    }
                    
                }
            }
        }
    }
    return count;
}
*/

function checkCombo(tp,bt,lf,rt, matches, words){
    
    var count = 0;
    var mtl = matches[tp][lf];
    var mtr = matches[tp][rt];
    
    var mlt = matches[lf][tp];
    var mrt = matches[rt][tp];
    
    var mbl = matches[bt][lf];
    var mbr = matches[bt][rt]; 
    
    var mlb = matches[lf][bt];
    var mrb = matches[rt][bt];
    var width, height;
    
    for (var i=0; i<mtl.length; i++){
        for(var j=0; j<mbl.length; j++){
            height = mlb[j] - mlt[i];
            if(height < 2) continue;
            
            for(var k=0; k<mtr.length; k++){
                width = mtr[k] - mtl[i];
                if(width < 2) continue;

                for(var l=0; l<mbr.length; l++){
                    if ( ((mrb[l] - mrt[k]) == height) &&
                         ((mbr[l] - mbl[j]) == width) ){                        
                        count++;
                        break;
                    }
                }
            }
        }
    }
    
    return count;
}




function crosswordFormation(words) {    
    // build a complete grid of matches
    var wmatches = [];
    for(var i=0; i<4; i++){
        wmatches.push([[],[],[],[]]);
    }
    
    // find matches between strings
    var w1, w2;
    for(var i=0; i < 3; i++){
        for(var j=i+1; j < 4; j++){
            w1 = words[i];
            w2 = words[j];
            for(var k=0; k<w1.length; k++){
                for(var l=0; l<w2.length; l++){
                    if(w1[k] == w2[l]){
                        wmatches[i][j].push(k); // we put source indexes here
                        wmatches[j][i].push(l); // ...and destination indexes here                   
                    }
                }
            }
        }
    }
//    console.log(wmatches);
    
    // find all permutations
    var unused, t, b, l, r;
    var count=0;
    var seq, seqs = [];
    
    for(var t=0; t < 4; t++){               
        for(var b=0; b < 4; b++){
            if (t == b) continue;           
            
            unused = [0,1,2,3].filter(n => (n!=t) && (n!=b));                                    
            for(var i=0; i<2; i++){
                l = unused[i];
                r = unused[+(!i)];
                
                // skip the rotated cases
                if(seqs.indexOf([l,r,t,b].join('_')) >=0){
                    continue;
                }
                seqs.push([t,b,l,r].join('_'));
                count += checkCombo(t,b,l,r, wmatches, words);
            }
        }
    }
        
    // we double count for rotated cases
    return count * 2;
}
