class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    addNode(value) {
      this.heap.push(value);
      this.heapifyUp();
    }
  
    deleteMin() {
      if (this.heap.length === 0)
        return false;
      else {
        [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];
        let min = this.heap.pop();
        this.heapifyDown();
        return min;
      }
    }
  
    deleteNode(value) {
      let index = this.heap.indexOf(value);
      if (index === -1)
        return false;
      else {
        [this.heap[0], this.heap[index]] = [this.heap[index], this.heap[0]]; // Fix the assignment
        this.heap[0] = Number.MIN_VALUE;
        this.heapifyUp(index);
        this.deleteMin();
      }
    }
  
    heapifyUp(index = this.heap.length - 1) {
      while (index > 0) {
        let parent = Math.floor((index - 1) / 2);
        if (this.heap[index] < this.heap[parent])
          [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
        index = parent;
      }
    }
  
    heapifyDown(index = 0) {
      let size = this.heap.length;
      while (index < size) {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let min = index;
        if (left < size && this.heap[min] > this.heap[left])
          min = left;
        if (right < size && this.heap[min] > this.heap[right])
          min = right;
        if (index !== min)
          [this.heap[index], this.heap[min]] = [this.heap[min], this.heap[index]];
        else
          break;
      }
    }
  
    print() {
      console.log(this.heap);
    }
  }
  
  let heap = new MinHeap();
  
  heap.addNode(50);
  heap.addNode(5);
  heap.addNode(20);
  heap.addNode(1);
  heap.addNode(0);
  heap.addNode(-2);
  heap.addNode(4);
  
  heap.print();
  
  heap.deleteNode(0);
  console.log(heap.deleteNode(4));
  
  heap.deleteMin()
  console.log(heap.deleteMin());
  console.log(heap.deleteMin());
  console.log(heap.deleteMin());
  console.log(heap.deleteMin());
  console.log(heap.deleteMin());
  console.log(heap.deleteMin());