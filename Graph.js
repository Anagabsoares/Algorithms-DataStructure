class Graph { //WARNING: its an undirected graph 
    constructor() {
        this.adjacencyList = {}; // stores the connections
    }
    addVertex(vertex) {
        ;
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
        return this
    }
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjancentVertex = this.adjacencyList.pop()
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList(vertex)
    }
    DFSrecursive(start) {//recursive
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) { //the context o THIS in the helper functio has changed!!!
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor])
                    return dfs(neighbor)
            });
        })(start); // help function, add data into result and visited - and then at the very end of this code willl return result
        return result;
    }
    DFSiterative(start) {
        const stack = [start],
            result = [],
            visited = {};

        visited[start] = true;
        console.log(`this is visited ${visited}`)
        while (stack.length) {
            console.log(stack);
            let currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor)
                }
            });
        }
        return result
    }
    BFS(startingVertex) {//VISIT NEIGHBORS AT CURRENT  DEPTH FIRST
        const queue = [startingVertex];
        const result = [];
        const visited = {};
        let currentValue;
        visited[startingVertex] = true;

        while (queue.length) {
            currentValue = queue.shift();
            result.push(currentValue);
            this.adjacencyList[currentValue].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;

    }
};

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")
g.DFSrecursive("A")

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
