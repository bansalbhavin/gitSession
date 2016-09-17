var isValid = false;

isValid = true;

//we can compare variables against specific value
if(isValid === true){
    console.log("Data is valid");
} else {
    console.log("Data is not valid");
}

//we can directly use boolean variable in if condition
if(isValid){
    console.log("Data is valid");
} else {
    console.log("Data is not valid");
} 

//We can use comparion directly inside if condition
if( "credencys" === "credencys123" ){
    console.log("Data is valid");
} else {
    console.log("Data is not valid");
}

//Here we can use alternate condition which won't change the original value actually
if( !isValid ){
    console.log("Data is valid");
} else {
    console.log("Data is not valid");
}