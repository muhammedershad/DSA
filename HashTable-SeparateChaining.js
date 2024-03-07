class HashTable {
    constructor(size = 10) {
        this.size = size
        this.table = new Array(size).fill(null).map(() => [])
    }

    hash(key) {
        let sum = 0
        for(let i = 0; i < key.length; i++ ) {
            sum += key.charCodeAt(i)
        }
        return sum % this.size
    }

    set(key, val) {
        let ind = this.hash(key)
        let bucket = this.table[ind]
        for( let key_val of bucket ) {
            if(key_val.key === key) return key_val.val = val
        }
        return bucket.push({key, val})
    }

    get(key) {
        let ind = this.hash(key)
        let bucket = this.table[ind]
        for(let key_val of bucket ) {
            if( key_val.key === key ) return key_val.val
        }
        return undefined
    }
}

const hash = new HashTable(20)

hash.set('ab', 85)
hash.set('ba', 56)
hash.set('abc',23)

console.log(hash.get('ab'), hash.get('ba'), hash.get('abc'));