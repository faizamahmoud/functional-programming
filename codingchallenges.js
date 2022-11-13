// Creating Your Own Pure Function
// We can create our pure function as well. Let’s do one for duplicating a string n number of times.

// const duplicate = (str, n) =>  

// 	n < 1 ? '' : str + duplicate(str, n-1);
// This function duplicates a string n times and returns a new string.


function duplicate(str, n) {
    let string = ""

    if (n < 1) {
        return 'nothing'
    }
    for (let i = 1; i <= n; i++) {
        string += str + ' ';
    }
    return string

}


console.log(duplicate("hi", 0))