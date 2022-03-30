const chai = require('chai');
expect = chai.expect;
const {plus} = require('./mathFunctions');
//const multiply = require('./plus').plus;


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