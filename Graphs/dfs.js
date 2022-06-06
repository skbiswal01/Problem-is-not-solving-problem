// dfs traversal of a graph;

function dfs(graph, start) {
  var visited = [];
  var stack = [start];
  var current;
  while (stack.length) {
    current = stack.pop();
    if (!visited.includes(current)) {
      visited.push(current);
      graph[current].forEach(function(neighbor) {
        stack.push(neighbor);
      });
    }
  }
  return visited;
}

//construct graph using array list method;

function graphUsingArrayList(n) {
  var graph = [];
  for (var i = 0; i < n; i++) {
    graph[i] = [];
  }
  return graph;
}