// * Rest syntax collects multiple elements and "condenses" them into a single element
// * Join arrays, objects using the rest operator


const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array


const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}


// Destructuring assignment
// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack 
// values from arrays, or properties from objects, into distinct variables.

let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]


// The destructuring assignment uses similar syntax, but on the left-hand side of the assignment to 
// define what values to unpack from the sourced variable.

const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2

