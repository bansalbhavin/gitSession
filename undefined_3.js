var firstName = undefined;

//You should use this when you are sure that variable is defined somewhere above in your code
if(firstName === undefined){
    console.log("Firstname is undefined.")
}
//this will give error as x is not defined
//if(x === undefined){
//    console.log("X is undefined.")
//}

//When you are not sure that variable is defined or not
//it is best practice to use type of to check value in condition
if(typeof x === 'undefined'){
    console.log("X is undefined.")
}