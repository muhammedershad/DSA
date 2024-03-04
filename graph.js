class Graph{
    constructor(){
        this.nodes = new Map();
    }

    addNode(node){
        this.nodes.set(node,[]);
    }

    addEdge(node1,node2){
        if(!this.nodes.get(node1))
            this.addNode(node1);
        if(!this.nodes.get(node2))
            this.addNode(node2);
        this.nodes.get(node1).push(node2);
        this.nodes.get(node2).push(node1);
    }

    getNeighbors(node){
        return this.nodes.get(node);
    }

    removeNode(node){
        this.nodes.delete(node);
        this.nodes.forEach ((neighbors) => {
            const index = neighbors.indexOf(node);
            if(index !== -1)
                neighbors.splice(index,1);
        })
    }

    removeEdge(node1,node2){
        let n1 = this.nodes.get(node1);
        let n2 = this.nodes.get(node2)
        let index1 = n1.indexOf(node2);
        let index2 = n2.indexOf(node1);

        if(index1 !== -1 && index2 !== -1){
            n1.splice(index1,1);
            n2.splice(index2,1);
        }
    }

    hasNode(node){
        return this.nodes.has(node);
    }

    bfs(node){
        let visited = new Set();
        let queue = [node];

        while(queue.length > 0){
            let curr = queue.shift();
            console.log(curr);
            visited.add(curr);
            let neighbors = this.nodes.get(curr);
            for(let neighbor of neighbors){
                if(!visited.has(neighbor) && !queue.includes(neighbor))
                    queue.push(neighbor);
            }
        }
    }

    dfs(startNode,visited = new Set()){
        visited.add(startNode);

        console.log(startNode);

        const neighbors = this.getNeighbors(startNode);
        for(let neighbor of neighbors){
            if(!visited.has(neighbor))
                this.dfs(neighbor,visited);
        }
    }
}

let graph = new Graph();

graph.addNode(5);
graph.addNode(10);
graph.addNode(20);

graph.addEdge(20,10);
graph.addEdge(5,20);
graph.addEdge(12,10);

console.log(graph.getNeighbors(5));
console.log(graph.getNeighbors(10));
console.log(graph.getNeighbors(20));

// graph.removeNode(20);

console.log('--------------');

graph.bfs(5);

console.log('-------------');

graph.dfs(5);
// graph.removeEdge(5,20);

// console.log(graph.getNeighbors(5));
// console.log(graph.getNeighbors(10));
// console.log(graph.getNeighbors(20));