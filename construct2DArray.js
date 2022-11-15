
 const construct2DArray = (original, m, n) => {
    if (m * n !== original.length) {
      return [];
    }
  
    let a = [];
  
    original.map(element => {
        a.push(original.splice(0, n))
    })
    
    return a;
  };

  console.log(construct2DArray([1,2,3,4], 2, 2))

//   var construct2DArray = function(original, m, n) {
//     let arr = Array(m).fill().map(() => Array(n)); // create an array of m rows and n columns
//     if(original.length !== m * n) {
//         return [];
//     }
//     let row = 0;
//     let column = 0;
//     for (let i = 0; i < original.length; i++) {
//         arr[row][column] = original[i];
// 		column += 1;
//         if (i === (row + 1) * n - 1) { 
// 			row += 1; 	
// 			column = 0;
// 		}	
//     }
//     return arr;
// };