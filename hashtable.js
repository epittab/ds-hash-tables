class HashTable {
    constructor(size = 53){
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;

        for (let i = 0; i < Math.min(100, key.length); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set (key, value) {
        //hash key
        let hashed_key = this._hash(key);
        //check if there is data there
        if (this.keyMap[hashed_key]) {
            //if so, push into the nested structure
            
            // check to see if key exists

            this.keyMap[hashed_key].push([key, value]);
        } else {
            // if not, create a nested structure
            this.keyMap[hashed_key] = [[key, value]];
        }
        return value;
    }
    
    get (key) {
        // hash key
        let hashed_key = this._hash(key);
        
        if (this.keyMap[hashed_key]) { 
            // loop through to find key
            //if there return value
            let nds = this.keyMap[hashed_key]
        
            for ( let arr of nds ) {
                if (arr[0] === key) return arr[1];
                
                // arr[ inner["cyan", #000abc]
                //      inner["cyan", #ffffff]]

            }
       
        };
        // if not in the hash table, return undefined
        return undefined;

    }

    keys() {

        let returnArr = [];

        for (let arr of this.keyMap ) {
            if (arr) {
                for (let inner of arr) {
                    returnArr.push(inner[0])
                }
            }
        }

        return returnArr

    }

    values() {

        let returnSet = new Set();

        for (let arr of this.keyMap ) {
            if (arr) {
                for (let inner of arr) {
                    returnSet.add(inner[1])
                }
            }
        }

        return returnSet;



    }

}