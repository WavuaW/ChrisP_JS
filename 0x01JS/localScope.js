function myLocalScope() {
    //myVar is only visible within this scope.
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();

console.log(myVar)