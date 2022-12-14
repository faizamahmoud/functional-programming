// Spread syntax "expands" an array into its elements
// syntax:
// myFunction(a, ...iterableObj, b)---> array being passed into a function
// [1, ...iterableObj, '4', 'five', 6] ---> array literal: add an element into an array
// { ...obj, key: 'value' } ----> object literal: add a property to an object

const object = { key1: 'value1' };
const spreadArray = [...obj]; // TypeError: obj is not iterable

// On the other hand, spreading in object literals enumerates the own properties of the object. 
// For typical arrays, all indices are enumerable own properties, so arrays can be spread into 
// objects.

const array = [1, 2, 3];
const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }

//* 1. Add new members to arrays without using the push() method
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

//* 2. Convert a string to an array using the spread operator
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

//* 3. Copy either an object or an array into a separate one

const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed)


