const chai = require('chai');
expect = chai.expect;
const mathFunctions = require('../mathFunctions');
//const divide = require('./divide').divide;
//const multiply = require('./multiply').multiply;

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
        // throw new Error('Add f here');
        // declare varibles
        const d = 9;
        const e = 1;

        // declare expected result
        const expectedResult = d * e;
        //const expectedResult = 9;

        // call divide function
        const actualResult = mathFunctions.multiply(d, e);

        // compare expected result with the result of the divide function
        expect(expectedResult).to.be.equals(actualResult, `Expected: '${expectedResult}' is not equal to actual '${actualResult}'`);
    });




        // call the mathFunctions multiply and divide
        //mathFunctions.multiply(2, 4);
        //mathFunctions.divide(2, 4);


        // move multiply function into mathFunctions.js
        // write test for mutiply
        // launch test
        // write documentation in README.md on how to launch test
        // in terminal:
        // cd ~/Documents/Projects/ArinaAutoTester
        // mocha divide.test.js

        // write separate file test with plus function
        
    
});