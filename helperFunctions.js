
//* DIFFERENCE BETWEEN MAP AND FOREACH - ARRAY FUNCTIONS TO LOOOP THROUGH ARRAY
//* forEach is like a method of an object that is intended to modify that objects state.
//* map, on the other hand, does not necessarily modify any side effects, and just produces a new array.


const arr = [1,2,3,4];

// DOES NOT MODIFY ORIGINAL ARRAY
// you can chain 
const mapResult = arr.map((ar) => {
    return ar + 2
}); // [3,4,5,6]

// const mapResultChain = arr.map((ar) => {
//     return ar + 2
// }).filter();


// MODIFIES ORIGINAL ARRAY 
const forEachResult = arr.forEach((ar) => {
    return ar + 2
}); // undefined


const forEachResul2 = arr.forEach((ar, i) => {
    arr[i] = ar + 3
}); // undefined


// console.log(mapResult, forEachResult)


// * Implement Promise.all

const showText =  (text, time) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, time);
    })
}


//* if all promises are resolved, returns resolved arrays 
//* waits a second for it the first to get completed
Promise.all([
    showText("hello", 1000),
    Promise.resolve('hi')
])
    .then((value) =>
        console.log(value)); // logs ['hello', 'hi']

// * Polyfill

const myPromiseAll = (promises) => {
    let result = [];

    return new Promise((resolve, reject) => {
        promises.forEach((p, index) => {  
            p.then(res => { 
                result.push(res) //if successful, add to result array
                if (index === promises.length - 1) { //if all promises are resolved
                    resolve(result) 
                }
            }).catch((err) => { // if any one of the promises have failed, instantly fail and reject with error
                reject(err)
            })
        });
    });
} // ['hello', 'hi']



// failure - a promise fails
Promise.all([
    showText("hello", 1000),
    Promise.resolve('hi'),
    // Promise.reject('bye'),
]).then((value) =>
    console.log(value)); // if one promise fails, all promises fail


    // map, reduce, filter, sort






/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    
};

    