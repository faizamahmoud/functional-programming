

// FETCH API REQUIRES A DISCUSSION OF ..
// CALLBACKS, PROMISES, THEABLES, & ASYNC/AWAIT


// PROMISES : 
// 3 STATES: PENDING, FULFILLED AND REJECTED
const fetch = require('node-fetch');

const myPromise = new Promise((resolve, reject)  => {
    const error = false;
    if(!error){
        resolve('Yes! resolved the promise!')
    }else{
        reject('rejected')
    }
});

// console.log(myPromise) // Promise fulfilled: 'Yes! resolved promise' - the state of the promise - not the value

// To Get the value out of a promise - chanining thenables

// myPromise
// .then(value => {
//     return value + 1;
// })
// .then(newValue => {
//     console.log(newValue);
// })


// Simulate how fetch works by using setTimeout



const users = fetch('https://jsonplaceholder.typicode.com/')

// console.log(`users: ${users}`) // [object Promise] - pending



// readableStream - not data we can work with yet
// fetch('https://jsonplaceholder.typicode.com/')
// .then(response => {
//     console.log(response) // Response {type: cors, url: , body: ReadableStream, redirected: false, status: true, ok: true}
// })


// we need to call the json method on the readable stream
// fetch returns a promise and so does response.json
// fetch('https://jsonplaceholder.typicode.com/')
// .then(response => {
//     return response.json()
// })
// .then(data => {
//     console.log(data)
// })




// let responseClone; // 1
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(function (response) {
//     responseClone = response.clone(); // 2
//     return response.json();
// })
// .then(function (data) {
//     // Do something with data
//     console.log(data)
// }, function (rejectionReason) { // 3
//     console.log('Error parsing JSON from response:', rejectionReason, responseClone); // 4
//     responseClone.text() // 5
//     .then(function (bodyText) {
//         console.log('Received the following instead of valid JSON:', bodyText); // 6
//     });
// });

// ASYNC/AWAIT

const myUsers = {
    userList: []
}

const myCoolFunction = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users'); // awaiting a promise
    const jsonUserData = await response.json(); // awaiting a promise
    console.log(jsonUserData) // logs array of objects of users
    return jsonUserData;
}

// myCoolFunction(); // returns user

const anotherFunc = async () => {
    const data = await myCoolFunction();
    myUsers.userList = data;
    console.log(myUsers.userList)
}

anotherFunc(); // returns user
console.log(myUsers.userList) // returns [] - executes immeditaly so its empty 