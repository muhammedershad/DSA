class Stack{
    constructor(){
        this.items = [];
    }

    push(value){
        this.items.push(value);
    }

    pop(){
        return this.items.pop();
    }
}

let stack = new Stack();

let str = 'ershad'
for(let i=0;i<str.length;i++){
    stack.push(str[i]);
}

let reverseStr = '';

for(i=0;i<str.length;i++){
    reverseStr +=  stack.pop();
}

console.log(reverseStr);



class HashTable{
    constructor(size){
        this.size = size;
        this.hashTable  = new Map(size);
    }

    hash(key){
        let total = 0;
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i);
        }
    }

    addElement(key,val){
        let index = this.hash(key);
        this.hashTable[index] = val;
    }

    print(){
        if(this.hashTable[i]){
            console.log(this.hashTable[i]);
        }
    }
}

let hashTable 



function insertionSort(arr){
    for(i=1;i<arr.length;i++){
        let temp = arr[i];
        let j = i - 1;
        while(j >= 0 && temp < arr[j]){
            arr[j+1] = arr[j]
            j--;
        }
        arr[j+1] = temp;
    }
    return arr;
}

let arr = [2,5,-5,0,6]

console.log(insertionSort(arr));