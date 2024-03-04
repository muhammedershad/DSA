class MaxHeap {
  constructor() {
    this.heap = [];
  }

  addNode(value) {
    this.heap.push(value);
    this.heapify(this.heap.length - 1);
  }

  heapify(index) {
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);
      if (this.heap[parent] < this.heap[index]) {
        [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
      }
      index = parent;
    }
  }

  removeMax() {
    if (this.heap.length === 0)
      return false;
    [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];
    let max = this.heap.pop();
    this.heapifydown();
    return max;
  }

  removeNode(value){
    let index = this.heap.indexOf(value);
    if(index === -1)
      return false;
    else{
      [this.heap[index],this.heap[0]] = [this.heap[0],this.heap[index]]
      this.heap[0] = Number.MAX_VALUE;
      this.heapify(index);
      this.removeMax();
    }
  }

  heapifydown(index = 0) {
    let size = this.heap.length;
    while (index < size) {
      let max = index;
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      if (left < size && this.heap[left] > this.heap[max])
        max = left;
      if (right < size && this.heap[right] > this.heap[max])
        max = right;
      if (max !== index) {
        [this.heap[index], this.heap[max]] = [this.heap[max], this.heap[index]];
        index = max;
      } else {
        break;
      }
    }
  }

  buildUp(arr){
    this.heap = arr;
    for(let i = Math.floor(arr.length / 2) ; i >= 0;i--){
      this.heapifydown(i);
    }
    return arr;
  }

  print() {
    console.log(this.heap);
  }
}

let heap = new MaxHeap();

heap.addNode(10);
heap.addNode(20);
heap.addNode(25);
heap.addNode(3);
heap.addNode(100);
heap.addNode(36);
heap.addNode(19);
heap.addNode(47);

heap.print();

console.log('------------------------');

heap.removeNode(3);

heap.print();

console.log('------------------');

console.log(heap.removeMax());
console.log(heap.removeMax());
console.log(heap.removeMax());
console.log(heap.removeMax());
console.log(heap.removeMax());
console.log(heap.removeMax());
console.log(heap.removeMax());
console.log(heap.removeMax());

console.log(heap.buildUp([10,20,3,8,41,1,-8]));



