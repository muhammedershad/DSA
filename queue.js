// class Queue {
//     constructor() {
//       this.queue = [];
//     }
  
//     enqueue(item) {
//       this.queue.push(item);
//     }
  
//     dequeue() {
//       if (this.isEmpty()) {
//         return undefined;
//       }
//       return this.queue.shift();
//     }
  
//     peek() {
//       if (this.isEmpty()) {
//         return undefined;
//       }
//       return this.queue[0];
//     }
  
//     isEmpty() {
//       return this.queue.length === 0;
//     }
  
//     size() {
//       return this.queue.length;
//     }
//   }
  
//   let queue = new Queue();
  
//   queue.enqueue('item1');
//   queue.enqueue('item2');
//   queue.enqueue('item3');
  
//   console.log(queue.size()); 
//   console.log(queue.peek()); 
  
//   console.log(queue.dequeue()); 
//   console.log(queue.dequeue()); 
  
//   console.log(queue.isEmpty()); 
  
//   console.log(queue.dequeue()); 
//   console.log(queue.dequeue()); 
  
//   console.log(queue.isEmpty()); 

  
  
  
  
  
  
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    enqueue(item) {
      const newNode = new Node(item);
      if (this.isEmpty()) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.size++;
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return undefined;
      }
      const removedNode = this.head;
      this.head = this.head.next;
      if (this.head === null) {
        this.tail = null;
      }
      this.size--;
      return removedNode.value;
    }
  
    peek() {
      if (this.isEmpty()) {
        return undefined;
      }
      return this.head.value;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    getSize() {
      return this.size;
    }
  }

  const queue = new Queue();

queue.enqueue('item1');
queue.enqueue('item2');
queue.enqueue('item3');

console.log(queue.getSize()); 
console.log(queue.peek()); 

console.log(queue.dequeue()); 
console.log(queue.dequeue()); 

console.log(queue.isEmpty()); 

console.log(queue.dequeue()); 
console.log(queue.dequeue()); 

console.log(queue.isEmpty());

