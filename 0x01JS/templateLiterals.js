const person = {
    name: 'Edgar Wendoh',
    age: 29
};

const greeting = `Hello, my name is ${person.name}! I am ${person.age} years old.`;

console.log(greeting);

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-duo-keys"]
};

function makeList(arr) {
    const resultDisplayArray = [];

    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class='text-warning>${arr[i]}</li>`)
    }

    return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);