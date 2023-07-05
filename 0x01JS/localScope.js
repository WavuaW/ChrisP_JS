function myLocalScope() {
    //myVar is only visible within this scope(the function scope).
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();

console.log(myVar)