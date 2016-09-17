/**
 * Function to toggle vlue using if conditionto check for true//alse
 */
function toggleBooleanValue(data)
{
    if(typeof data !== 'boolean'){
        return "This function is meant to work wth boolean data only.";
    } else {
        if(data === true){
            data = false;
        } else {
            data = true;;
        }
        return data;
    }
}

/**
 * Function to toggle vlue witout using if condition
 */
function toggleBooleanValueWithoutIf(data)
{
    if(typeof data !== 'boolean'){
        return "This function is meant to work wth boolean data only.";
    } else {
        data = !data;
        return data;
    }
}

var isValid = true;
//var isValid = "Credencys";
var result = toggleBooleanValue(isValid);
console.log(result);

var resultNew = toggleBooleanValueWithoutIf(isValid);
console.log(resultNew);
