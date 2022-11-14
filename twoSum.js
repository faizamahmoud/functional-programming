// Brute force
const twoSum = function(nums, target) {  
        for(let i=0; i< nums.length; i++){
            for(let j=i+1; j< nums.length; j++){
                if(nums[i] + nums[j] === target){
                    return [i, j];
                }
            }
        }
    return [-1,-1]
    
    };

    // create hash table, O(1)
    
    
    
    var twoSum2 = function(nums, target) {
        const valToIndex = {};
        
        for (let i = 0; i < nums.length; i++) {
            let key = target - nums[i];
            
            if (key in valToIndex) { // if key is in object
                console.log(valToIndex)
                return [valToIndex[target - nums[i]], i]; // valToIndex = {}
            }
            valToIndex[nums[i]] = i; // {'1': 0}, {'6': 1}, {}
            
        }
        
        return [-1, -1];
    };


    let arr = [1,6,3,9]
    let goal = 4;
    console.log(twoSum2(arr, goal))

    