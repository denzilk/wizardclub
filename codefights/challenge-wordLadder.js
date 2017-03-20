/*
Given two words, beginWord and endWord, and a wordList of approved words, find the length of the shortest transformation sequence from beginWord to endWord such that:

    Only one letter can be changed at a time
    Each transformed word must exist in the wordList.

Return the length of the shortest transformation sequence, or 0 if no such transformation sequence exists.

Note: beginWord does not count as a transformed word. You can assume that beginWord and endWord are not empty and are not the same.

Example

For beginWord = "hit", endWord = "cog", and wordList = ["hot", "dot", "dog", "lot", "log", "cog"], the output should be
wordLadder(beginWord, endWord, wordList) = 5.

The shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog" with a length of 5.

Input/Output

    [time limit] 4000ms (js)

    [input] string beginWord

    Constraints:
    1  beginWord.length  5.

    [input] string endWord

    Constraints:
    endWord.length = beginWord.length.

    [input] array.string wordList

    An array containing all of the approved words. All words in the array are the same length and contain only lowercase English letters. You can assume that there are no duplicates in wordList.

    Constraints:
    2  wordList.length  600,
    wordList[i].length = beginWord.length.

    [output] integer

    An integer representing the length of the shortest transformation sequence from beginWord to endWord using only words from wordList as described above.

    https://codefights.com/interview/EDaACHNYHyH6qQFAL/description
*/

// why won't you work fast enough?

function wordLadder(beginWord, endWord, wordList) {
    var wordStream = [{
        "word": beginWord,
        "path": {}
    }];
    wordStream[0].path[beginWord]=true;
    var n, children;
    var newNode, newWord; 
    var cursor, npath, nword, word, diff;
    
    // precalc each word's diff to the endword.  0 is closest
    wordList = wordList.map(function(w){
        var diff = 0;
        var wlen = w.length;
        for(var i=0; i<wlen; i++){
            diff += (w[i] != endWord[i]);
        }
        return [w,diff];
    });
        
    for(cursor = 0; cursor < wordStream.length; cursor++){
        n = wordStream[cursor];
        nword = n.word;
        npath = n.path;

        // once we've visited a node, remove it
        wordList = wordList.filter(wl=> wl[0]!=nword);
        
        children =  wordList.filter(function(wl){
            word = wl[0];
            diff = wl[1];
                        
            // more than 1 change away
            var changes = 0;
            for(var i=0;i<word.length;i++){
                if (word[i] != nword[i]){
                    changes++;
                    if(changes > 1){
                        return false;
                    }
                }
            }
                        
            return true;
        });

        // sort in order of closest to endWord
        children.sort(function(a,b){
            return (a[1] - b[1]);
        });
        
        // instant match find
        if(typeof children[0] != 'undefined' && 
           children[0][1] == 0){
            npath[children[0][0]]=true;
            return Object.keys(npath).length;
        }
        
        // otherwise add children
        var clen = children.length
        
        for (var i = 0; i< clen; i++) {
            newWord = children[i][0];
            newNode = {
                word: newWord,
                path: Object.assign({}, npath)
            };
            newNode.path[newWord]=true;
            
            wordStream.push(newNode);
        }
    }    
    return 0;
}

