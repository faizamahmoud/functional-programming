/*
SYNTAX:
let newArray = oldArray.filter((currentValue, index, array) {

});

    newArray: The array that is returned.
    oldArray: The filter function runs onto every element of this array.
    currentValue: The current element’s value.
    index: The current element’s array index..
    array: The array object to which the current element belongs to.

*/
// The global variable
let s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  // Only change code below this line
  let newArray = [];
  this.forEach(function(x) {
    if (callback(x) == true) {
      newArray.push(x);
    }
  });
  // Only change code above this line
  return newArray;
};

let new_s = s.myFilter(function(item){
  return item % 2 === 1;
});