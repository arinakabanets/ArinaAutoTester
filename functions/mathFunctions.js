const mathFunctions = {
    divide: (x,y) => divide(x, y),
    multiply: (x,y) => multiply(x, y),
    plus: (x,y) => plus(x, y)
}

module.exports = mathFunctions;

/**
 * Divides two values
 * @param {number} x 
 * @param {number} y 
 * @returns x / y
 */
function divide(x, y) {
    return x / y;
}

/**
 * Multiplies two values and prints result
 * @param {number} x 
 * @param {number} y 
 * @returns x * y
 */
 function multiply(x, y) {
     // Check if input is a number
     // If input number is not undefined
    let result = x * y;
    console.log(`Multiplying ${x} by ${y} = ${result}`);
    return result;
}

/**
 * Pluses two values and prints result
 * @param {number} x 
 * @param {number} y 
 * @returns x + y
 */
 function plus(x, y) {
    let result = x + y;
    console.log(`Plus ${x} and ${y} = ${result}`);
    return result;
}