let fs = require("fs");
let nums = fs.readFileSync("/Users/anamsoomro/Downloads/input.txt").toString().split("\n");
// nums = ['123', '386', '3894', ... ]

// might be more efficient to sort, remove dupes, then approach it systematically.. come back later

/* 

let i = 0 
let j = 1 

loop:
    while ( i < nums.length ){
        while ( j < nums.length ){
            if ( parseInt(nums[i]) + parseInt(nums[j]) == 2020 ){
                console.log(parseInt(nums[i]) * parseInt(nums[j]))
                break loop
            } else { 
                j += 1 
            }
        }
        i += 1
        j = i + 1
    }

*/


let i = 0 
let j = 1 
let k = 2

loop: 
    while ( i < nums.length ){
        while ( j < nums.length ){
            while ( k < nums.length ){
                if ( parseInt(nums[i]) + parseInt(nums[j]) + parseInt(nums[k])== 2020 ){
                    console.log(parseInt(nums[i]) * parseInt(nums[j]) * parseInt(nums[k]))
                    break loop
                } else { 
                    k += 1 
                }
            }
            j += 1
            k = j + 1
        }
        i += 1
        j = i + 1
    }