function createAdder(baseNumber){
    return function(numberToAdd){
        return baseNumber + numberToAdd;
    }
}

var numberTen = createAdder(10);
console.log(numberTen(5));


var numberFive = createAdder(5);
console.log(numberFive(3));