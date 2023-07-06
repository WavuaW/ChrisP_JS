function testNotEqual(val) {
    if (val != 99) { // this does type conversion
        return "Not Equal";
    }
    return "Equal";
}

console.log(testNotEqual(10));