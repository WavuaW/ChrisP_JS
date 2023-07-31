const [z, x, , y] = [1, 2, 3, 4, 5, 6]; //by adding the extra comma we are a skipping a single value in the array as then indexing happens in a uniform way

console.log(z, x, y);

let a = 8, b = 6;

(() => {
    "use strict";
    [a, b] = [b, a]
})();
console.log(a);
console.log(b);
