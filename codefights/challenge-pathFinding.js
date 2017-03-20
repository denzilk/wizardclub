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



function shortestPathWithEdge(start, finish, weight, graph){
    var emptyedges=[];
    // massage source data
    start--;
    finish--;
    var i,j, length = graph.length;
    for(i=0; i<length; i++){        
        for(j=0; j<length; j++){
            if(graph[i][j]==0){
                graph[i][j]= Number.POSITIVE_INFINITY;
                if(i<j){
                    emptyedges.push([i,j]);
                }
            }
        }
    }

    var path, cursor, solutions = [floydwarshall(start, finish, graph)]; 
    
    for(i=0; i<length; i++){
        graph[i][i] = 0;
    }
    
    length = emptyedges.length;
    for(i=0; i<length; i++){
        
        cursor = emptyedges[i];
        path = graph[start][cursor[0]] + weight + graph[cursor[1]][finish];        
        solutions.push(path);
        
        path = graph[finish][cursor[0]] + weight + graph[cursor[1]][start];        
        solutions.push(path);
    }


    return Math.min.apply(null, solutions) || 0;
    
}

function floydwarshall(start, finish, graph){
    var length = graph.length;
    var i,j,k;
    for(k=1; k<length; k++){
        for(i=0; i<length; i++){
            for(j=0; j<length; j++){
                if ( (graph[i][k] + graph[k][j]) < graph[i][j]){
                    graph[i][j] = graph[j][i] =graph[i][j] = (graph[i][k] + graph[k][j]);
                }
            }
        }
    }
//    console.log(graph);
    return graph[start][finish];
}

/*
function buildNode(start, finish, weight, graph, taken){
    var cost = 0;
    if(taken.length){
      cost = graph[taken[taken.length-1]][start];
      if(cost<=0){
        if(weight.used){
          cost += weight.size;
          weight.size = 0;
        }
      }
    }
    var node = {
        i: start,
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
            case (taken.indexOf(i)>=0):
              continue;
            case (graph[from][i] > 0):
              newnode = buildNode(i, finish, Object.assign({},weight), graph, newlist);
              node.children.push(newnode);
              break;
            case (!weight.used):
              newnode = buildNode(i, finish,Object.assign({},weight,{used:true}), graph, newlist);
              node.children.push(newnode);
        }
    }

    var kidscores = node.children.map(function(kid){
      return kid.score;
    }).filter(function(s){
      return (s > 0);
    });
    
    node.score = (kidscores.length ? Math.min.apply(null,kidscores) : 0);
    if(node.score){
      node.score += node.cost;
    }

    return node;
}

function shortestPathWithEdge(start, finish, weight, graph) {
    start--;
    finish--;

    var nroot = buildNode(start, finish, {used:false,size:weight}, graph,[]);
    return nroot.score;
}
*/


