


const deletionDistance = (str1, str2) => {
    let array1 = [...str1];
    let array2 = [...str2];

    let count = 0; 

    array1.filter(item =>  
       ( !array2.includes(item) ? count++ : ""))
    
    return count;
}



// console.log(deletionDistance('hiadff', 'hi'))
// deletionDistance('hi', 'hi')
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// addded parameter called list and changed bookName to name
// spread operator creates a reference to the original array so doesnt mutate
function add(list, name) {
  return [...list,name]
  
}

// Change code below this line
function remove(list, name) {
    const index = list.indexOf(name)
// slice array in 2, create new array with books before and after the book to remove : 
    const newArrayAfterBookRemoved = [...list.slice(0,index),...list.slice(index + 1)];
    return newArrayAfterBookRemoved
    
}

// console.log(add(bookList, 'THawk')) 
// console.log(`booklist : ${bookList}`)
console.log(remove(bookList, 'Philosophiæ Naturalis Principia Mathematica'))
console.log(bookList.length)

console.log(`booklist : ${bookList}`)
console.log(bookList.length)