console.log('hello World')

process.on('exit', function() {
    //example of using process
})

//creating your own evernt

const { EventEmitter } = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('lunch', () => {
    console.log('yum 🤤')
})


eventEmitter.emit('lunch');
eventEmitter.emit('lunch');