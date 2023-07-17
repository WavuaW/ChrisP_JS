Math.random() //returns a random number between 0 and one but it cannot be one but it can be zero
Math.floor(Math.random() * 20); //floor rounds down to the nearest whole number

function randomWholeNum() {

    return Math.random();
}

randomWholeNum

function ourRandomRange(ourMin, ourMax) {

    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

var myRandom = ourRandomRange(1, 9)

console.log(myRandom)

