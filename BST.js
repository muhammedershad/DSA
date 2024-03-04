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

//     isEmpty(){
//         return this.root === null;
//     }

//     Insert(value){
//         const node = new Node(value);
//         if(this.root === null){
//             this.root = node;
//         }else
//             this.insertNode(this.root,node);
//     }

//     insertNode(root,node){
//         if(root.value > node.value){
//             if(root.left === null)
//                 root.left = node;
//             else
//                 this.insertNode(root.left,node);
//         }else{
//             if(root.right === null)
//                 root.right = node;
//             else
//                 this.insertNode(root.right,node);
//         }
//     }

//     search(root,value){
//         if(!root){
//             return false;
//         }else{
//             if(root.value === value)
//                 return true;
//             else{
//                 if(root.value > value)
//                     return this.search(root.left,value);
//                 else
//                     return this.search(root.right,value);
//             }
//         }
//     }

//     preOrder(root){
//         if(root){
//             console.log(root.value);
//             this.preOrder(root.left);
//             this.preOrder(root.right);
//         }
//     }

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left);
//             console.log(root.value);
//             this.inOrder(root.right);
//         }
//     }

//     postOrder(root){
//         if(root){
//             this.postOrder(root.left);
//             this.postOrder(root.right);
//             console.log(root.value);
//         }
//     }

//     breadthFirstSearch(){
//         let queue = [];
//         queue.push(this.root);
//         while(queue.length){
//             let curr = queue.shift();
//             console.log(curr.value);
//             if(curr.left)
//                 queue.push(curr.left);
//             if(curr.right)
//                 queue.push(curr.right)
//         }
//     }

//     min(root){
//         if(!root.left)
//             return root.value;
//         else
//             return this.min(root.left);
//     }

//     max(root){
//         if(!root.right)
//             return root.value
//         else
//             return this.max(root.right);
//     }

//     delete(value){
//         this.root = this.deleteNode(this.root,value);
//     }

//     deleteNode(root,value){
//         if(!root)
//             return root
//         else{
//             if(root.value > value)
//                 root.left = this.deleteNode(root.left,value);
//             else if(root.value < value)
//                 root.right = this.deleteNode(root.right,value);
//             else{
//                 if(!root.left && !root.right )
//                     return null;
//                 else if(!root.left)
//                     return root.right;
//                 else if(!root.right)
//                     return root.left;
//                 root.value = this.min(root.right)
//                 root.right = this.deleteNode(root.right,root.value);
//             }
//         }
//         return root;
//     }

//     findClosestValue(value){
//         let closest = this.root.value;
//             closestValue(this.root,value);
//             return closest;
//         function closestValue(root,value){
//             if(!root)
//                 return;
//             if(Math.abs(root.value - value) < Math.abs(closest - value))
//                 closest = root.value;
//             if(value < root.value)
//                 closestValue(root.left,value);
//             else if(value > root.value)
//                 closestValue(root.right,value);
//         }     
//     }

    
// }

// function isBST(bst){
//     return checkBST(bst.root,Number.MIN_VALUE,Number.MAX_VALUE)
// }
// function checkBST(root,min,max){
//     if(root === null)
//         return true;

//     if(root.value < min || root.value > max)
//         return false;
    
//     return checkBST(root.left,min,root.value) && checkBST(root.right,root.value,max);
// }

// let bst = new BST();

// console.log('is tree is empty?',bst.isEmpty());

// bst.Insert(10);
// bst.Insert(5);
// bst.Insert(15);
// bst.Insert(3);
// bst.Insert(7);

// bst.preOrder(bst.root);

// console.log('---------');

// bst.inOrder(bst.root);

// console.log('---------');

// bst.postOrder(bst.root);

// console.log('---------');

// // bst.delete(10)

// bst.breadthFirstSearch();

// console.log('closest value = ',bst.findClosestValue());

// console.log(isBST(bst));

// console.log('min:',bst.min(bst.root));
// console.log('max:',bst.max(bst.root));

// console.log(bst.search(bst.root,10));
// console.log(bst.search(bst.root,5));
// console.log(bst.search(bst.root,15));
// console.log(bst.search(bst.root,3));
// console.log(bst.search(bst.root,20));


class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    addNode(value){
        let node = new Node(value);
        this.addNodeHelper(this.root,node);
    }

    addNodeHelper(root,node){
        if(!root)
            root = node;
        else{
            if(root.value > node.value)
                this.addNodeHelper(root.left,node);
            if(root.value < node.value)
                this.addNodeHelper(root.right,node);
        }
    }

    removeNode(value){
        if(!this.root)
            return 'empty bst';
        else{
            this.root = this.removeNodeHelper(this.root,value);
        }
    }

    removeNodeHelper(root,value){
        if(!root)
            return root;
        else{
            if(root.value > value)
                root.left = this.removeNodeHelper(root.left,value);
            if(root.value < value)
                root.right = this.removeNodeHelper(root.right,value);
            else{
                if(!root.left && !root.right)
                    return null;
                else if(!root.left)
                    return root.right;
                else if(!root.right)
                    return root.left;
                node.value = this.min(node);
                this.removeNodeHelper(node.right,node.value);
            }
        }
        return root;
    }

    search(value){
        if(!this.root)
            return false;
        else
            return this.searchHelper(this.root,value);
    }

    searchHelper(node,value){
        if(node.value === value)
            return true;
        else if(node.value > value)
            this.searchHelper(node.left,value);
        else if(node.value < value)
            this.searchHelper(node.right,value);
        return false;
    }

    min(node){
        if(!node.left)
            return node.value;
        else
            return this.min(node.left);
    }

    max(node){
        if(!node.right)
            return node.value;
        else
            return this.max(node.right);
    }
}