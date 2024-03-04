// class Graph {
//     constructor() {
//       this.adjacencyList = new Map();
//     }
  
//     addVertex(vertex) {
//       if (!this.adjacencyList.has(vertex)) {
//         this.adjacencyList.set(vertex, []);
//       }
//     }
  
//     addEdge(startVertex, endVertex) {
//       if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
//         throw new Error('Invalid vertices');
//       }
  
//       const connections = this.adjacencyList.get(startVertex);
//       connections.push(endVertex);
//     }
  
//     removeVertex(vertex) {
//       if (!this.adjacencyList.has(vertex)) {
//         throw new Error('Invalid vertex');
//       }
  
//       this.adjacencyList.delete(vertex);
  
   
//       for (const connections of this.adjacencyList.values()) {
//         const index = connections.indexOf(vertex);
//         if (index !== -1) {
//           connections.splice(index, 1);
//         }
//       }
//     }
  
//     removeEdge(startVertex, endVertex) {
//       if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
//         throw new Error('Invalid vertices');
//       }
  
//       const connections = this.adjacencyList.get(startVertex);
//       const index = connections.indexOf(endVertex);
//       if (index !== -1) {
//         connections.splice(index, 1);
//       }
//     }
  
//     getVertices() {
//       return Array.from(this.adjacencyList.keys());
//     }
  
//     getEdges(vertex) {
//       if (!this.adjacencyList.has(vertex)) {
//         throw new Error('Invalid vertex');
//       }
  
//       return this.adjacencyList.get(vertex);
//     }
//   }
  

//   const graph = new Graph();
//   graph.addVertex('A');
//   graph.addVertex('B');
//   graph.addVertex('C');
//   graph.addVertex('D');
  
//   graph.addEdge('A', 'B');
//   graph.addEdge('B', 'C');
//   graph.addEdge('C', 'D');
//   graph.addEdge('D', 'A');
  
//   console.log(graph.getVertices());
  
//   console.log(graph.getEdges('A'));

  
//   graph.removeEdge('A', 'B');
//   console.log(graph.getEdges('A'));

  
//   graph.removeVertex('C');
//   console.log(graph.getVertices());

  

class Graph {
    constructor() {
      this.adjacencyList = new Map();
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList.has(vertex)) {
        this.adjacencyList.set(vertex, []);
      }
    }
  
    addEdge(startVertex, endVertex) {
      if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
        throw new Error('Invalid vertices');
      }
  
      const connections = this.adjacencyList.get(startVertex);
      connections.push(endVertex);
    }
  
    removeVertex(vertex) {
      if (!this.adjacencyList.has(vertex)) {
        throw new Error('Invalid vertex');
      }
  
      this.adjacencyList.delete(vertex);
  
      for (const connections of this.adjacencyList.values()) {
        const index = connections.indexOf(vertex);
        if (index !== -1) {
          connections.splice(index, 1);
        }
      }
    }
  
    removeEdge(startVertex, endVertex) {
      if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
        throw new Error('Invalid vertices');
      }
  
      const connections = this.adjacencyList.get(startVertex);
      const index = connections.indexOf(endVertex);
      if (index !== -1) {
        connections.splice(index, 1);
      }
    }
  
    depthFirstSearch(startVertex) {
      const visited = new Set();
      const result = [];
  
      this._depthFirstSearchHelper(startVertex, visited, result);
  
      return result;
    }
  
    _depthFirstSearchHelper(vertex, visited, result) {
      visited.add(vertex);
      result.push(vertex);
  
      const connections = this.adjacencyList.get(vertex);
      for (const neighbor of connections) {
        if (!visited.has(neighbor)) {
          this._depthFirstSearchHelper(neighbor, visited, result);
        }
      }
    }
  
    breadthFirstSearch(startVertex) {
      const visited = new Set();
      const result = [];
      const queue = [startVertex];
      visited.add(startVertex);
  
      while (queue.length > 0) {
        const vertex = queue.shift();
        result.push(vertex);
  
        const connections = this.adjacencyList.get(vertex);
        for (const neighbor of connections) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        }
      }
  
      return result;
    }
  }
  
  const graph = new Graph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addVertex('E');
  graph.addVertex('F');
  
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('C', 'E');
  graph.addEdge('D', 'E');
  graph.addEdge('D', 'F');
  graph.addEdge('E', 'F');
  
  console.log(graph.depthFirstSearch('A'));
  console.log(graph.breadthFirstSearch('A'));
  