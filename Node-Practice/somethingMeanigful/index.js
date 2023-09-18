const { readFile } = require("fs")

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

// readFile('./hello.txt', 'utf-8', (err, txt) => {
//     console.log(txt)
// });

// console.log('do this ASAP')

// const myModule = require('./my-modules')

// console.log(myModule)

const express = require('express');
const app = express()

app.get('/', (request, response) => {
    readFile('./home.html', 'utf8', (err, html) => {
        if (err) {
            response.status(500).send('sorry, out of order')
        }
        response.send(html);
    })
});

app.listen(process.env.PORT || 3000, () => console.log(`App is available on http://localhost:3000`))

