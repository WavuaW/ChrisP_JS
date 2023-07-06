function testStrictNotEqual(val) {
    if (val !== 7) { //does not convert types
        return "Not Equal";
    }
    return "Equal";
}

console.log(testStrictNotEqual(20));