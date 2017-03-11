/*
You are given an undirected weighted graph, which is represented as an adjacency matrix. Find the shortest path between a start node and a finish node in the graph. You are allowed to add at most one edge of a given weight between any two nodes that are not directly connected to each other.

Example

For start = 1, finish = 4, weight = 2 and

   graph = [[0, 2, 0, 4, 0],
            [2, 0, 1, 0, 0],
            [0, 1, 0, 3, 0],
            [4, 0, 3, 0, 1],
            [0, 0, 0, 1, 0]]
the output should be
shortestPathWithEdge(start, finish, weight, graph) = 3.

In the original graph, the shortest distance between nodes 1 and 4 is equal to 4. But you can add an edge of weight 2 between nodes 1 and 5, making the resulting distance 3.



Input/Output

[time limit] 4000ms (js)
[input] integer start

Constraints:
1  start  graph.length.

[input] integer finish

Constraints:
1  finish  graph.length.

[input] integer weight

Constraints:
1  weight  105.

[input] array.array.integer graph

Constraints:
1  graph.length  1000,
graph[i].length = graph.length,
0  graph[i][j]  105.

[output] integer

The shortest path from start to finish with the possibility of adding an extra edge with the given weight.

https://codefights.com/skill-test/PBSHhgQwRDNYqCeck
*/

function buildNode(start, finish, weight, graph, taken){
    var pstart = start + 1;
    var pfinish = finish + 1;
//    console.log('ENTER: start:'+pstart+', finish: '+pfinish);
//    console.log(weight);

    var cost = 0;
    if(taken.length){
      cost = graph[taken[taken.length-1]][start];
      if(cost<=0){
        if(weight.used){
          cost += weight.size;
  //        console.log('WEIGHT USED! cost goes to '+cost);
          weight.size = 0;
        }
      }
    }
    var node = {
        i: pstart,
        cost: cost,
        score: cost,
        taken: taken,
        children: []
    };


    if(start == finish){
        return node;
    }

    var newlist, newnode, from;
    newlist = taken.slice();
    newlist.push(start);
    from = taken.length? taken[taken.length-1] : start;
    from = start;

    for(var i=0; i<graph.length; i++){

        switch(true){
            case (i==start):
              // console.log(taken.map(function(i){return i+1;}));
              // console.log('skip route '+ (i+1) +' because self');
              continue;
            case (taken.indexOf(i)>=0):
              // console.log(taken.map(function(i){return i+1;}));
              // console.log('skip route '+ (i+1) +' because already visited');
              continue;
            case (graph[from][i] > 0):
              // console.log(taken.map(function(i){return i+1;}));
              // console.log('adding real route '+(from+1)+','+ (i+1) );
              // console.log( (from+1)+','+(i+1)+'::'+graph[from][i]);

              newnode = buildNode(i, finish, Object.assign({},weight), graph, newlist);
              node.children.push(newnode);
              break;
            case (!weight.used):
              // console.log(taken.map(function(i){return i+1;}));
              // console.log('adding EXTRA route '+(from+1)+','+ (i+1) );
              // console.log( (from+1)+','+(i+1)+'::'+graph[from][i]);
              newnode = buildNode(i, finish,Object.assign({},weight,{used:true}), graph, newlist);
              node.children.push(newnode);
            // default:
            //   console.log(taken.map(function(i){return i+1;}));
            //   console.log('skip route '+ (i+1) +' because already used weight');
        }
    }

    var kidscores = node.children.map(function(kid){
      return kid.score;
    }).filter(function(s){
      return (s > 0);
    });
//    console.log('start/finish: '+start+','+finish);
    //  if(start == 1){
    //    console.log('KIDS = '+ kidscores.length);
    //    console.log(node.children);
    //    console.log(Math.min.apply(null,kidscores));
    //  }
    node.score = (kidscores.length ? Math.min.apply(null,kidscores) : 0);
    if(node.score){
      node.score += node.cost;
    }

//    console.log(node);
  //  console.log('EXITING: start:'+pstart+', finish: '+pfinish);
    return node;
}

function shortestPathWithEdge(start, finish, weight, graph) {
    var cursor;
    var length= graph.length;

    start--;
    finish--;
//    console.log('FROM '+start+' to '+finish);
//    console.log(graph);

    var nroot = buildNode(start, finish, {size:weight, used:false}, graph, []);

//    console.log(nroot);

    return nroot.score;
}

