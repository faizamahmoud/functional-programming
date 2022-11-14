
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