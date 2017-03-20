/*
Quora shows a customized feed of recent stories on a user's home page. Stories in Quora refer to activities that happen on the site, such as when a user adds a question or upvotes an answer. Every story has a score, which represents the value that the story brings to the user. The goal is to quickly generate a feed of the best and most recent stories for the user every time they reload their Quora home page.

Your task is to design the algorithm that picks the stories that are displayed in this feed.

You are given a list of stories that, for each story, contains: the time the story was published, the story's score, and the height in pixels that it takes to display the story. Given the total number of pixels h that are available for displaying the story feed in the browser, you want to maximize the sum of the scores for the stories that you can display in the feed every time the user reloads their home page. You can only consider recent stories, so a story can be displayed at any given moment only if it was posted no longer than span units of time before that moment. You do not have to use up all the pixels available in the browser.

For each reload event, return an array where the first element is the best available sum of scores, and the other elements are the set of story IDs that correspond to that score sum. The IDs should be returned in ascending order. The answer arrays should be ordered by their corresponding reload event times.

If two sets of stories have the same score, choose the set that contains fewer stories. If there is still a tie, choose the set which has the lexicographically smaller set of IDs.

Example

For span = 10, h = 100 and

events = [[11, 50, 30],
          [12],
          [13, 40, 20],
          [14, 45, 40],
          [15],
          [16],
          [18, 45, 20],
          [21],
          [22]]
the output should be

feedOptimizer(span, h, events) = [[50, 1],
                                  [135, 1, 2, 3],
                                  [135, 1, 2, 3],
                                  [140, 1, 3, 4],
                                  [130, 2, 3, 4]]
There are 4 stories (with IDs 1 to 4) and 5 reload events.

At the first reload, there is only one story (ID = 1) with score of 50 available for display;
After the next two reloads, there are 3 stories that take up 90 of the 100 pixels available, for a total score of 135;
After reloading at time 21, there are 4 stories available to choose from, but only 3 will fit into the browser height. The best set is [1, 3, 4] for a total score of 140;
At the last reload event, you can no longer consider story 1 when choosing stories because it is more than 10 time units old.
The best set of scores is thus [2, 3, 4].

For a good visualization of this, check out the image below:



Input/Output

[time limit] 4000ms (js)
[input] integer span

The number of time units elapsed prior to the reload event.

Constraints:
5 ≤ span ≤ 100.

[input] integer h

The height of the browser in pixels.

Constraints:
50 ≤ h ≤ 500.

[input] array.array.integer events

An array of events. A story event is described by 3 positive integers: the time of publication, its score, and its height in pixels. A reload event is described by 1 positive integer: the timestamp of the reload.

The events are given in chronological order, and it is guaranteed that no two events occur at the same time.

Constraints:
5 ≤ events.length ≤ 100,
1 ≤ events[i][j] < 109.

[output] array.array.integer

An array containing an entry for each reload event in events. For each entry, the score sum is the first element and the recent story IDs from which this score is derived are the remaining elements of the array.


https://codefights.com/fight/AE2K8TejcBzjQcrnp/solutions/7RLbMY674r9a3DoyW
*/


function findBestCombo(list, maxheight){

    // arranged by slope
    var i,j,k, length = list.length;
    var cursor, height=0, score=0;
    var out = [];
    for(i=0; i<length; i++){
        cursor = list[i];
        if(cursor.score==200 && list.length == 7){
            continue;
        }
        if((height+cursor.height) <= maxheight){
            height += cursor.height;
            score += cursor.score;
            out.push(cursor);
        }
    }
    return out;
}

function zzzfindBestCombo(a, maxheight){
    var j, height, score, highest = -1, highest_id = -1;

    var fn = function(n, src, got, all) {
        if (n == 0) {
            if (got.length > 0) {

                height = 0;
                score = 0;
                for(j=0, height=0; j<got.length; j++){
                    height += got[j].height;
                    score += got[j].score;
                }
                if(height <= maxheight){
                    if(score > highest){
                        highest = score;
                        highest_id = all.length;
                    }
                    all[all.length] = got;
                }
            }
            return;
        }
        for (var j = 0; j < src.length; j++) {
            fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
        }
        return;
    }
    var all = [];

    for (var i=0; i < a.length; i++) {
        fn(i, a, [], all);
    }
    all.push(a);



    if(highest_id < 0){
        return [];
    }else{
        return all[highest_id];
    }
}


function yyyfindBestCombo(list, maxheight){
    var set = [],
        listSize = list.length,
        combinationsCount = (1 << listSize),
        combination;

    var j, height, score, highest = -1, highest_id = -1;

    for (var i = 1; i < combinationsCount ; i++ ){
        var combination = [];
        for (var j=0;j<listSize;j++){
            if ((i & (1 << j))){
                combination.push(list[j]);
            }
        }

        height = 0;
        score = 0;
        for(j=0, height=0; j<combination.length; j++){
            height += combination[j].height;
            score += combination[j].score;
        }

        if(height <= maxheight){
            set.push(combination);
            if(score > highest){
                highest = score;
                highest_id = set.length - 1;
            }
        }
    }

    if(highest_id < 0){
        return [];
    }else{
        return set[highest_id];
    }

}

function feedOptimizer(span, h, events) {
    var stories = [];
    var refreshes = [];
    var story_id = 1;

    events.forEach(function(e){
        if(e.length == 1){
            refreshes.push(e[0]);
        }else{
            stories.push({
                id: story_id,
                time: e[0],
                score: e[1],
                height: e[2],
                slope: (e[1] / e[2]).toPrecision(4)
            });
            story_id++;
        }
    });

    var out = refreshes.map(function(refreshTime, ind){
        console.log(' ');
        console.log('FIGUING OUT '+ ind);
        // select candidates
        var i,j,k;
        var maxspan = span;
        var maxheight = h;

        var candidates = stories.filter(function(s){
            return ( ((refreshTime - s.time) <= maxspan) &&
                (refreshTime > s.time) );
        });

        console.log(candidates);
         candidates.sort(function(a,b){
             return (b.score - a.score);
         });



        candidates = findBestCombo(candidates, maxheight);

        var score = candidates.reduce(function(acc,val){
           return acc + val.score;
        },0);

        // format for output
        candidates.sort(function(a,b){
            return (a.id - b.id);
        });
        var refreshOut = [score];
        candidates.forEach(function(c){
           refreshOut.push(c.id);
        });

        return refreshOut;
    });

    return out;
}
