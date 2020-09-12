// function hash(key, arrayLen) {
//     let total = 0;
//     let weird_prime = 31;
//     for (let i = 0; i < Math.min(key.length, 100); i++) {
//         //map "a" to 1,  "b" to 2; "c" to 3 and so on 
//         let char = key[i];
//         let value = char.charCodeAt(0) - 96
//         total = (total * weird_prime + value) % arrayLen;
//     }
//     return total
// }

class HashTable {
    constructor(size = 53) { //defaul - add a prime number to avoid clustering of values into a small number of buckets 
        this.keyMap = new Array(size);
    }
    _hash(key) {
        let total = 0;
        let weird_prime = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            //map "a" to 1,  "b" to 2; "c" to 3 and so on 
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * weird_prime + value) % this.keyMap.length;
        }
        return total
    }
    set(key, value) {
        let index = this._hash(key)
        //inser the value at hat index the key and the value togetheR 
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }
    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined

    }
    value() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            console.log("")
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    valuesArr.push(this.keyMap[i][j])
                }
            }
        }
    }
}
// try usee a arrLenght that is prime -> prime numbers in the hash are helpful in
//spreding out the keys more uniformoly

let ht = new HashTable();
ht.set("maroon", "#800000")
ht.set("yellow", "#FFFF00")
ht.set("olive", "#808000")
ht.set("salmon", "#FA8072")
ht.set("lightcoral", "#F08080")
ht.set("mediumvioletred", "#C71585")
ht.set("plum", "#DDA0DD")