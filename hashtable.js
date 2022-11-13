// create an associative array with fast search, insertion, and delete operations

class HashTable {
    constructor() {
        this.table = new Array(127); // all key/value pairs will be stored in table
        this.size = 0;
    }

    _hash(key) { //private class
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length; //add % to ensure hash value doesnt exceed the bucket size
    }

    // HashTable class will be able to avoid any index number collision and store the key/value pair inside the second-level array, methods updated to reflect
    set(key, value) {
        const index = this._hash(key); //The set() method will call the _hash() method to get the index value.
        if (this.table[index]) {
          for (let i = 0; i < this.table[index].length; i++) {
            // Find the key/value pair in the chain
            if (this.table[index][i][0] === key) {
              this.table[index][i][1] = value;
              return;
            }
          }
          // not found, push a new key/value pair
          this.table[index].push([key, value]);
        } else {
          this.table[index] = [];
          this.table[index].push([key, value]);
        }
        this.size++;
      }

      get(key) {
        const target = this._hash(key);
        if (this.table[target]) {
          for (let i = 0; i < this.table.length; i++) {
            if (this.table[target][i][0] === key) {
              return this.table[target][i][1];
            }
          }
        }
        return undefined;
      }

      remove(key) {
        const index = this._hash(key);
      
        if (this.table[index] && this.table[index].length) {
          for (let i = 0; i < this.table.length; i++) {
            if (this.table[index][i][0] === key) {
              this.table[index].splice(i, 1);
              this.size--;
              return true;
            }
          }
        } else {
          return false;
        }
      }

      display() {
        this.table.forEach((values, index) => {
          const chainedValues = values.map(
            ([key, value]) => `[ ${key}: ${value} ]`
          );
          console.log(`${index}: ${chainedValues}`);
        });
      }

}

// test
/*
const ht = new HashTable();
ht.set("Canada", 300);
ht.set("France", 100);
ht.set("Spain", 110);
// console.log(ht)

console.log(ht.get("Canada")); // [ 'Canada', 300 ]
console.log(ht.get("France")); // [ 'France', 100 ]
console.log(ht.get("Spain")); // [ 'Spain', 110 ]

console.log(ht.remove("Spain")); // true
console.log(ht.get("Spain")); // undefined

 another insertion
ht.set("ǻ", 192);

console.log(ht.get("Spain")); // [ 'ǻ', 192 ] -> index collision 
console.log(ht.get("ǻ")); // [ 'ǻ', 192 ]
*/

/*
because the number 507 is the sum of both of their ASCII code
To handle the index number collision, you need to store the key/value pair in a second array so that the end result looks as follows:

[
    [
        [ "Spain", 110 ],
        [ "ǻ", 192 ]
    ],
    [
        ["France", 100]
    ],
]

*/

/*
To create the second array, you need to update the set() method so that it will:

Look to the table[index] and loop over the array values.
If the key at one of the arrays is equal to the key passed to the method, replace the value at index 1 and stop any further execution with the return statement.
If no matching key is found, push a new array of key and value to the second array.
Else, initialize a new array and push the key/value pair to the specified index
Whenever a push() method is called, increment the size property by one.
*/


// test the implementation by creating a new HashTable instance and do some insertion and deletion:
const ht = new HashTable();

ht.set("France", 111);
ht.set("Spain", 150);
ht.set("ǻ", 192);

ht.display();
// 83: [ France: 111 ]
// 126: [ Spain: 150 ],[ ǻ: 192 ]

console.log(ht.size); // 3
ht.remove("Spain");
ht.display();
// 83: [ France: 111 ]
// 126: [ ǻ: 192 ]