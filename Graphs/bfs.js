//breadth first search traversal in graphs

function bfs(graph, start) {
  var queue = [start];
  var visited = [];
  var current;
  while (queue.length) {
    current = queue.shift();
    visited.push(current);
    graph[current].forEach(function(neighbor) {
      if (!visited.includes(neighbor)) {
        queue.push(neighbor);
      }
    });
  }
  return visited;
}

//count no of connected graphs
function noofconnectedgraphs(graph) {
  var visited = [];
  var count = 0;
  for (var node in graph) {
    if (!visited.includes(node)) {
      count++;
      visited = visited.concat(bfs(graph, node));
    }
  }
  return count;
}


//build a graph;
function buildgraph(n) {
  var graph = {};
  for (var i = 0; i < n; i++) {
    graph[i] = [];
  }
  return graph;
}