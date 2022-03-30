const chai = require('chai');
expect = chai.expect;
const mathFunctions = require('../functions/mathFunctions');

describe('multiply/divide suite', function () {
    
    it('divide test', async function () {
        // declare varibles
        const a = 50;
        const b = 10;

        // declare expected result
        const expectedResult = a / b;
        //const expectedResult = 1;

        // call divide function
        const actualResult = mathFunctions.divide(a, b);

        // compare expected result with the result of the divide function
        expect(expectedResult).to.be.equals(actualResult, `Expected: '${expectedResult}' is not equal to actual '${actualResult}'`);
    });

    it('multiply test', async function () {
        // declare varibles
        const a = 9;
        const b = 2;
        // 0
        // char instead of number
        // floating numbers like 0.35 0,35
        // set only one parameter to function like mathFunctions.multiply(a);

        // declare expected result
        const expectedResult = a * b;

        // call divide function
        const actualResult = mathFunctions.multiply(a, b);

        // compare expected result with the result of the divide function
        expect(expectedResult).to.be.equals(actualResult, `Expected: '${expectedResult}' is not equal to actual '${actualResult}'`);
    });
});