//find the minimum distance from source to destination

function minimumDistanceinGraphs(graph, source, destination) {
    let visited = [];
    let queue = [];
    let distance = [];
    let parent = [];
    for (let i = 0; i < graph.length; i++) {
        visited[i] = false;
        distance[i] = Infinity;
        parent[i] = -1;
    }
    distance[source] = 0;
    queue.push(source);
    while (queue.length > 0) {
        let u = queue.shift();
        visited[u] = true;
        for (let i = 0; i < graph[u].length; i++) {
            let v = graph[u][i];
            if (distance[v] > distance[u] + 1) {
                distance[v] = distance[u] + 1;
                parent[v] = u;
                if (!visited[v]) {
                    queue.push(v);
                }
            }
        }
    }
    return distance[destination];
}