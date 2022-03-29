const mathFunctions = {
    divide: (x,y) => divide(x, y),
    multiply: (x,y) => multiply(x, y)
}

/**
 * Divides two values
 * @param {number} x 
 * @param {number} y 
 * @returns x / y
 */
function divide(x, y) {
    return x / y;
}

module.exports = mathFunctions;

/**
 * Multiplies two values and prints result
 * @param {number} x 
 * @param {number} y 
 * @returns x * y
 */
 function multiply(x, y) {
    let result = x * y;
    console.log(`Multiplying ${x} by ${y} = ${result}`);
    return result;
}

module.exports = mathFunctions;