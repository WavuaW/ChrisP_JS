function convertToInteger(str) {
    return parseInt(str, 2); // the second argument is a Randix(specifies the base of the number in the string) that determines which base system the number is in
}

console.log(convertToInteger("10011"));