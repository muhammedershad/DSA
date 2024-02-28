// const obj = {};
// obj['name'] = 'ershad';
// obj['age'] = 22;

// console.log(obj['name']);
// console.log(obj['age']);

// obj.name = 'sam';
// delete obj.age;

// console.log(obj);




// const hashTable = new Map();

// hashTable.set('name','ershad');
// hashTable.set('age',22);

// for(let [key,val] of hashTable){
//     console.log(`${key} = ${val}`);
// }

// console.log(hashTable.size);
// console.log(hashTable.get('name'));




// class HashTable {
//     constructor() {
//       this.table = new Array(127);
//       this.size = 0;
//     }
  
//     _hash(key) {
//       let hash = 0;
//       for (let i = 0; i < key.length; i++) {
//         hash += key.charCodeAt(i);
//       }
//       return hash % this.table.length;
//     }
  



class HashTable{
    constructor(size){
        this.size = size;
        this.table = new Array(size);
    }

    hash(key){
        let total = 0;
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key,value){
        let index = this.hash(key);
        this.table[index] = value;
    }

    get(key){
        let index = this.hash(key);
        return this.table[index] 
    }

    remove(key){
        let index = this.hash(key);
        this.table[index] = undefined;
    }

    print(){
        for(let i = 0;i<this.table.length;i++){
            if(this.table[i])
            console.log(this.table[i]);
        }
    }
}

let hashTable = new HashTable(50);

hashTable.set('name','ershad');
hashTable.set('age',22);
hashTable.set('plac','vellamunda');

hashTable.print();
hashTable.get('name');
console.log(hashTable.get('name'));
hashTable.remove('name');
hashTable.print();