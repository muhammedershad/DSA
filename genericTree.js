// class TreeNode{
//     constructor(value){
//         this.value = value;
//         this.children = [];
//     }

//     addChaild(node){
//         this.children.push(node);
//     }
// }

// const root = new TreeNode('A');
// const nodeB = new TreeNode('B');
// const nodeC = new TreeNode('C');
// const nodeD = new TreeNode('D');

// root.addChaild(nodeB);
// root.addChaild(nodeC);
// nodeB.addChaild(nodeD);

// function traverseBFS(node){
//     console.log(node.value);

//     for(let child of node.children){
//         traverseBFS(child);
//     }
// }

// traverseBFS(root);



class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  
    addChild(childNode) {
      this.children.push(childNode);
    }
  }
  
  class Tree {
    constructor() {
      this.root = null;
    }
  
    addRoot(value) {
      if (this.root !== null) {
        console.log("Root already exists. Please remove the existing root first.");
        return;
      }
      this.root = new TreeNode(value);
    }
  
    addNode(parentNode, value) {
      const newNode = new TreeNode(value);
      parentNode.addChild(newNode);
    }
  
    removeNode(parentNode, childNode) {
      const index = parentNode.children.indexOf(childNode);
      if (index !== -1) {
        parentNode.children.splice(index, 1);
      }
    }
  
    traverseDFS(node, callback) {
      if (node === null) {
        return;
      }
      callback(node.value);
      for (const child of node.children) {
        this.traverseDFS(child, callback);
      }
    }
  
    traverseBFS(callback) {
      if (this.root === null) {
        return;
      }
      const queue = [this.root];
      while (queue.length > 0) {
        const node = queue.shift();
        callback(node.value);
        for (const child of node.children) {
          queue.push(child);
        }
      }
    }
  }
  
  
  const tree = new Tree();
  
  tree.addRoot("A");
  
  const rootNode = tree.root;
  tree.addNode(rootNode, "B");
  tree.addNode(rootNode, "C");
  
  const nodeB = rootNode.children[0];
  tree.addNode(nodeB, "D");
  tree.addNode(nodeB, "E");
  
  const nodeC = rootNode.children[1];
  tree.addNode(nodeC, "F");
  
  console.log("DFS traversal:");
  tree.traverseDFS(tree.root, (value) => console.log(value));
  
  console.log("BFS traversal:");
  tree.traverseBFS((value) => console.log(value));
  