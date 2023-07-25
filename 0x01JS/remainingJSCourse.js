//Ternary operator
return a === b ? true : false

//multi conditional ternary operator
function checkSign(num) {
    return num > 0 ? 'positive' : num < 0 ? 'negative' : 'zero'
}

//let and const. Let does not allow you to declare the variable two times in the same scope
//the scope of let is limited to the block it was declared.
//use let to ensure that your variable stays where you defined it in
//you cannot reasign a const
//you can use const with capital. const SENTENCE
//mutate an arrray that has const
const s = [5, 7, 2];
function editInPlace() {
    "use strict";

    //s = [2, 5, 7];
    s[0] = 2;
    s[1] = 7;
    s[2] = 7;
}

editInPlace();

//using Object.freeze()

function freezeObj() {
    'use strict';
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);
}
//creatig anonymous functions, you can convert it to an arrow function
var magic = function() {
    return new Date();
};

//with the arrow function this is reduced to.

const magic = () => new Date();

const myConcat = (arr1, arr2) => arr1.concat(arr2);

//higher order arrow functions

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squareIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x); //if you have a single argument you don't need to have parenthesis around your argument
    return squareIntegers;
};

const squareIntegers = squareList(realNumberArray);
console.log(squareIntegers)

//rest operator
const sum = (function () {
return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
};
}) ();

console.log(sum(1, 2, 3));