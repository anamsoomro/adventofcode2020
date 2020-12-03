
let fs = require("fs");
let input = fs.readFileSync("/Users/anamsoomro/Downloads/input_day2.txt").toString().split("\n");

let valid_passwords_by_usage = 0 
let valid_passwords_by_index = 0 


for(let i = 0; i < input.length-1 ; i++){
    var values = input[i].split(" ")

    var val1 = parseInt(values[0].split('-')[0]) // 4 
    var val2 = parseInt(values[0].split('-')[1]) // 8 
    var char = values[1].slice(0,1) // 'n'
    var password  = values[2] // 'dnjjrtclnzdnghnbnn'

    validByUsage(val1, val2, char, password) && ( valid_passwords_by_usage += 1 )
    validByIndex(val1, val2, char, password) && ( valid_passwords_by_index += 1 )
    
}

function validByUsage(min_chars, max_chars, char, password){
    let usage = 0 
    var valid
    for(let i=0; i < password.length; i++){
        if( password[i] == char){
            usage += 1
            if( usage >= min_chars && usage <= max_chars ){ 
                valid = true
            } else { 
                valid = false
            }
            // add a break to not check rest chars if hits max_chars
        } 
    }
    return valid
}

function validByIndex(index_a, index_b, char, password){
    var valid
    if( password[index_a - 1] == char && password[index_b - 1] != char ){
        valid = true
    } else if ( password[index_a - 1] != char && password[index_b - 1] == char ){
        valid = true
    }
    return valid
}

console.log(valid_passwords_by_usage)
console.log(valid_passwords_by_index)


