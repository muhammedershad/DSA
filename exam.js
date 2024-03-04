// class Node{
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BST{
//     constructor(){
//         this.root = null;
//     }

//     addNode(value){
//         let node = new Node(value);
//         if(!this.root)
//             this.root = node;
//         else
//             this.addNodeHelper(this.root,node);
//     }

//     addNodeHelper(root,node){
//         if(root.value > node.value){
//             if(!root.left)
//                 root.left = node;
//             else    
//                 this.addNodeHelper(root.left,node);
//         }
//         if(root.value < node.value){
//             if(!root.right)
//                 root.right = node;
//             else
//                 this.addNodeHelper(root.right,node);
//         }
//     }

//     inOrderDFS(root){
//         if(root){
//             this.inOrderDFS(root.left);
//             console.log(root.value);
//             this.inOrderDFS(root.right);
//         }
//     }
// }

// let bst = new BST();

// bst.addNode(10);
// bst.addNode(5);
// bst.addNode(15);
// bst.addNode(3);
// bst.addNode(4);

// bst.inOrderDFS(bst.root);

// let arr = [5,8,10,20,60,25,3,1,23,55];


class GraphNode{
    constructor(){
        this.cildren = new Map(); 
    }
}

function BFS(node){
    let visited = [];
    let queue = [node];
    while(queue.length){
        let curr = queue.shift();
        console.log(curr.key);
        visited.push(curr);
        let neighbours = curr.children(node);
        for(neighbour of neighbours){
            if(visited.indexOf(neighbours) === -1){
                queue.push(neighbour); 
            }
        }
    }
}