// class Stack{
//     constructor(){
//         this.stack = [];
//     }

//     push(val){
//         this.stack.push(val);
//     }

//     pop(){
//         return this.stack.pop();
//     }

//     isEmpty(){
//         return this.stack.length === 0;
//     }

//     size(){
//         return this.stack.length;
//     }

//     peek(){
//         return this.stack[this.stack.length - 1]
//     }

//     print(){
//         console.log(this.stack.toString());
//     }
// }

// const stack = new Stack();

// console.log(stack.isEmpty());
// console.log(stack.pop());

// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);

// stack.print();

// console.log(stack.pop());

// console.log(stack.peek());
// console.log(stack.size());





class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class StackUsingSinglyLinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    push(val){
        let node = new Node(val);
        if(this.head === null)
            this.head = node;
        else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    pop(){
        if(this.size === 0)
            return 'list is empty'
        else{
            this.head = this.head.next;
            this.size--;
            return 'poped'
        }
    }

    peek(){
        if(this.size === 0)
            return 'list empty'
        else
            return this.head.val;
    }

    sizeOfList(){
        return this.size;
    }

    print(){
        if(this.size === 0)
            return console.log('list is empty');
        else{
            let curr = this.head;
            while(curr){
                console.log(curr.val);
                curr = curr.next;
            }
        }
    }
}

const list = new StackUsingSinglyLinkedList();

console.log(list.sizeOfList());

list.push(10);
list.push(20);
list.push(30);
list.push(40);

list.print();

console.log(list.pop());

console.log(list.peek());

list.print();

