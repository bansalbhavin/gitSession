function countdown(startingPoint, stoppingPoint){
    var i;
    
    for(i = startingPoint; i >= stoppingPoint; i--){
        console.log("Using for " + i);
    }
    
    var j = startingPoint;
    while(j >= stoppingPoint){
        console.log("Using while " + j);
        j--;
    }
}

countdown(10,0);