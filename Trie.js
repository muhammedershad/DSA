class TrieNode{
    constructor(){
        this.children = new Map();
        this.isEnd = false; 
    }
}

class Trie{
    constructor(){
        this.root  = new TrieNode();
    }

    addString(str){
        let curr = this.root;
        for(let i=0;i<str.length;i++){
            let char = str[i];
            if(!curr.children.has(char)){
                curr.children.set(char,new TrieNode);
            }
            curr = curr.children.get(char);
        }
        curr.isEnd = true;
    }

    search(str){
        let curr = this.root;
        for(let i=0;i<str.length;i++){
            let char =  str[i];
            if(curr.children.has(char))
                curr = curr.children.get(char);
            else
                return false;
        }
        if(!curr.isEnd)
            return false;
        return true;
    }

    prefix(str){
        let curr = this.root;
        for(let i = 0; i<str.length;i++){
            let char = str[i];
            if(curr.children.has(char))
                curr = curr.children.get(char);
            else
                return false;
        }
        return true;
    }

    removeStr(str){
        function removeHelper(node,str,index){
            if(str.length === index){
                if(!node.isEnd)
                    return false;

                node.isEnd = false;
                return node.children.size === 0;
            }

            const char = str[index];
            if(!node.children.has(char))
                return false;
            
            let shouldDelete = removeHelper(node.children.get(char),str,index+1);
            if(shouldDelete){
                node.children.delete(char);
                return node.children.size === 0;
            }
            return false;
        }
        removeHelper(this.root,str,0);
    }
}

let trie = new Trie();

trie.addString('ershad');
trie.addString('erfad');
trie.addString('akhil');

console.log(trie.search('ershad'));
console.log(trie.search('erfad'));
console.log(trie.search('akhil'));
console.log(trie.search('ershadp'));
console.log(trie.search('ersh'));
console.log(trie.search('amar'));

console.log('------------------------');

console.log(trie.prefix('e'));
console.log(trie.prefix('ere'));
console.log(trie.prefix('ers'));
console.log(trie.prefix('ershad'));
console.log(trie.prefix('akh'));
console.log(trie.prefix('ram'));
console.log(trie.prefix('erfa'));

console.log('----------------------------');

console.log(trie.removeStr('ershad'));

console.log(trie.search('ershad'));
console.log(trie.search('erfad'));