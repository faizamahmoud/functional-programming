
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];

//* 'this' refers to the array we're operating the callback function on
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2; 
});



// the global Array
const t = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Add your code below this line
  this.forEach(a => newArray.push(callback(a)));
  // Add your code above this line
  return newArray;
};

const new_t = s.myMap(function(item) {
  return item * 2;
});

// The global Array
const u = [23, 65, 98, 5];

Array.prototype.myMap = function(callback, arr = [], i = 0) {
  return i < this.length
    ? this.myMap(callback, arr.concat(callback(this[i])), i + 1)
    : arr;
};

const new_u = s.myMap(function(item) {
  return item * 2;
});