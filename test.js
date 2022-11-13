


const deletionDistance = (str1, str2) => {
    let array1 = [...str1];
    let array2 = [...str2];

    let count = 0; 

    array1.filter(item =>  
       ( !array2.includes(item) ? count++ : ""))
    
    return count;
}



console.log(deletionDistance('hiadff', 'hi'))
// deletionDistance('hi', 'hi')