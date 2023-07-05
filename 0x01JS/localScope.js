function myLocalScope() {
    //myVar is only visible within this scope(the function scope).
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();

console.log(myVar)

//in the case where a global variable and the local variable have the same names the local variable takes precidence over the global variable and what is outputed falls within the scope of the local variable.