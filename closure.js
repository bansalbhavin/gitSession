function greetMaker(name){
    function greet(){
        console.log("Hellow " + name + "!");
    }
    return greet;
}

var bansalGreet = greetMaker("Bhavin");
bansalGreet();

var panduGreet = greetMaker("Pandu");
panduGreet();