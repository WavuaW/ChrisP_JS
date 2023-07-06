function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal"
}

console.log(testStrict('7'))

/*
the == operator attempts to convert the two options to the same type 
While the === also checks for the type so for instance:
3 == 3
3 == '3'
will both be evaluated as true.
While:
3 === 3 returns true and,
3 === '3' evaluates as false
*/