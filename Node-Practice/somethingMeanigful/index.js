const { readFile } = require("fs").promises

// console.log('hello World')

// process.on('exit', function() {
//     // example of using process
// })


//creating your own evernt

// const { EventEmitter } = require('events');

// const eventEmitter = new EventEmitter();

// eventEmitter.on('lunch', () => {
//     console.log('yum 🤤')
// })

// eventEmitter.emit('lunch');
// eventEmitter.emit('lunch');

readFile('./hello.txt', 'utf-8', (err, txt) => {
    console.log(txt)
});

console.log('do this ASAP')

