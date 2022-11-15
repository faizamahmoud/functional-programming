/* test cases

121 = true
123 = false
-121 = false
2**32 = false (from constraint, max = 2**31 )

*/

/* Algo for reversing number - 123
*/
// 123
// console.log(123 % 10) // logs last number 3
// console.log(parseInt(123/10)) // logs first two numbers 12

//321
//3*10 + 2 = 32
// 32*10 + 1 = 321

const isPalindrome = (num)=> {
    
    if(n<0 || n>2**32){
        return false;
    }
    const n = num; // preserve the number to compare to reverse
    
    let rev = 0;

    while(n > 0) {
        let lastDigit =  num%10; // 3
        rev = rev*10 + lastDigit;  
        num = parseInt(num / 10);
    }
return n === num;
}

//  COMPLEXITY 
// WE'RE VISITING EVERY NUMBER ONCE -> O(n)