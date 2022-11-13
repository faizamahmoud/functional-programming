// * f(x,y) = 3x + 4y 


const reverseString = (str)=>{
    let reversed = ""; 
    const arrayStr = str.split(' ');
    // console.log(arrayStr)
    for(let i=0; i<arrayStr.length ; i++ ){
        reversed += reversedWord(arrayStr[i]) + " ";
    }
return reversed;
}


const reversedWord = (word)=>{
    let wordReverse = "";
    for(let i = word.length-1; i>=0; i--){
        wordReverse += word[i];
    }
return wordReverse ;
}

// let string1 = 'hello';
let string2 = 'hi my name is walrus'; // ih ym eman si surlaw

// console.log(reverseString(string1));
// console.log(reverseString(string2));

// * Time complexity O(n): every input(word) has one output
// * Space complexity O(n)
 



// 1. Don’t mutate data
// 2. Use pure functions: fixed output for fixed inputs, and no side effects 
// 3. Use expressions(evaluate to a value) and declarations(variables)
// When we satisfy these conditions, we can say our code is functional.
// chain functions together


/** JavaScript already has some functions that enable functional programming. 
Yes: String.prototype.slice, Array.protoype.filter, Array.prototype.join., map, fill

No: Array.prototype.forEach, Array.prototype.push are impure functions. */

/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */



 var construct2DArray = function(original, m, n) {
    let container = []
    
    if(original && (original.length === m*n)){

        let inner = [];
        
        for(let i=0; i<m; i++){  // i=0, 1, 
            for(let j=0; j<n; j++){ //j=0,1,2,3
            inner.push(original.slice(j))
            
            }
            container.push(inner)
        }
    }else{
        return [];
    }
    return container
};

console.log(construct2DArray([1,2,3,4,5,6,7,8],2,4))




function test(){
    let outer=[]

    for(let i=0; i<3; i++){
        let inner = []; 
        
        for(let j=0; j<4; j++){
            inner.push(0)
        }
        outer.push(inner)
        
    }
return outer
}



// console.log(test())

// fizz buzz
// https://betterprogramming.pub/functional-programming-in-javascript-introduction-and-practical-examples-d268e44395b2
// https://leetcode.com/problems/valid-parentheses/
// https://leetcode.com/problems/convert-1d-array-into-2d-array/