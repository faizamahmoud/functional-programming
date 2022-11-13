/**Functional programming is a paradigm of building computer programs using expressions and functions 
 * without mutating state and data. 
 * By respecting these restrictions, functional programming aims to write code that is clearer to understand 
 * and more bug resistant. This is achieved by avoiding using flow-control statements (for, while, break, 
 * continue, goto) which make the code harder to follow.
 * Functional programming requires us to write pure, deterministic functions which are less likely to 
 * be buggy.**/


/** Pure functions take some input and give a fixed output. Also, they cause no side effects in the outside 
 * world. 
 * because, for a fixed value of a and b, the output will always be the same.**/

const add = (a, b) => a + b;


/** getId is not a pure function
 * The reason being that it uses the global variable SECRET for computing the 
 * output. If SECRET were to change, the getId function will return a different value for the same input. 
 * Thus, it is not a pure function. */

const SECRET = 42;
const getId = (a) => SECRET * a;


/** This is also an impure function, and that too for a couple of reasons—
 * (1) it uses a non-local variable for computing its output, and 
 * (2) it creates a side effect in the outside world by modifying a variable in that world. */

let id_count = 0;
const getIdTwo = () => ++id_count;

/** getId --> 1
* getId --> 2
* getId --> 3: Are you sure? */

/** What’s the current value of id_count? 
* Which other functions are modifying id_count? 
* Are there other functions relying on id_count?
* Because of these reasons, we only use pure functions in functional programming. */

// Another benefit of pure functions is that they can be parallelized and memoized.

/** The Tenets of Functional Programming
So far, we have learned that functional programming is dependent on a few rules. They are as follows.

1. Don’t mutate data
2. Use pure functions: fixed output for fixed inputs, and no side effects
3. Use expressions and declarations
When we satisfy these conditions, we can say our code is functional. */


/** JavaScript already has some functions that enable functional programming. 
 * Example: String.prototype.slice, Array.protoype.filter, Array.prototype.join.

On the other hand, Array.prototype.forEach, Array.prototype.push are impure functions. */

//* JavaScript has a const declaration: which is perfect for functional programming since we won’t be mutating any data.

//* FILTER - As the name suggests, this filters the array

array.filter(condition);

const filterEven = x => x%2 === 0;  
[1, 2, 3].filter(filterEven);  
// [2]

//* MAP - maps each item of array to a function and creates a new array based on the return values of the 
//* function calls.
//* mapper is a function that takes an item of an array as input and returns the output.

array.map(mapper)

const double = x => 2 * x;  
[1, 2, 3].map(double);  
// [2, 4, 6]


//* REDUCE - reduce reduces the array to a single value.
//* reducer is a function that takes the accumulated value and the next item in the array and returns the 
//* new value. It is called like this for all values in the array, one after another.
//* array.reduce(reducer);

const sum = (accumulatedSum, arrayItem) => accumulatedSum + arrayItem  
[1, 2, 3].reduce(sum);
// 6


export const createWidgetFactory = ({parser}) => ({
    configurationRequests,widgetMaker
}) => async (event, context) => {
    const ctx = createCtx(event, context)
    const config = await getConfig(configurationRequests, ctx)
    return widgetMaker(event, context)
}

/*
What does closure mean in programming?
What is a higher-order function in functional programming?
What are pure and impure functions?
What is idempotency, and where is it used?
What is a monad in programming?
How do you know if a function is composite?
When is function currying used?
*/

// input: array of nested strings and nums
// output: true or false

// pure functions need atleast one parameter
// can only work with the input it receieves

// IMPURE: harder to test and debug
// no side effects - 
// Pure functions cannot  - access a db, API, file system, storage, modify the dom, or even log to the console, no data should be 
// mutated
// * Impure function
let x = 1;
const increment = () => x += 1;
console.log(increment(x)) // 2, x's state was mutated
console.log(x) // 2

// * Refactored to Pure function
let y = 1;
 const pureIncrement = (num) => num += 1;
 console.log(pureIncrement(y)) // 2
 console.log(y) // 1


//  * Impure
const myArray = [1,2,3];
const addToArray = (array, data) => {
    array.push(data);
    return array
}
console.log(addToArray(myArray, 4)) // [1,2,3,4], mutates global array
console.log(myArray) // [1,2,3,4]


//  * Pure
const pureAddToArray = (array, data) => [...array, data]
console.log(pureAddToArray(myArray, 4)) // [1,2,3,4,4]
console.log(myArray) // [1,2,3,4]

// Produces No Side-effects
// For a function to be pure it must produce zero side effects. Examples of common side effects include:

// Mutating inputs
// Modifying variables outside the function
// HTTP Calls
// console.log