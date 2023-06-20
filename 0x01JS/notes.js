/*
Data Types
undefined, null, boolean, string, symbol, number, and object
*/

var myName = "Chris" //can be used in the entire program 

myName = 8

let ourName = "freeCodeCamp" //within the scope in which you declare with let

const pi = 3.14 //variable that should never change

var a; //declare
var b = 2; //declaration and assigning
b = a;

console.log(a)

var myVar = 87;
myVar++; //Incrementing by one.
myVar--;

/***** 
 CODE   OUTPUT
 \'     single quote
 \"     double quote
 \\     backslash
 \n     newline
 \r     carriage return
 \t     tab
 \b     backspace
 \f     form feed
 *****/

 // Strings are immutable.
 // String Indexing - 0 index
 var firstName = "Ada";
 var lastLetterOfFirstName = firstName[firstName.length -1];

 // Selecting an element from an array of arrays,
 var myArray = [[1,2,3], [4,5,6], [7,8,9]]

 // Accessing elements 
 var myData = myArray[0][0];

 var myArray = [['John', 23], ['cat', 2]]

 myArray.push(["dog", 13])

 var ourArray = [1,2,3]
 var removed = ourArray.pop()

 // shift removes the first element.
 var removed = ourArray.shift()