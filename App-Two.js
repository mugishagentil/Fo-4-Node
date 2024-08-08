const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('myProject', (arg) => {
    console.log('Hello', arg)
})

emitter.emit('myProject', {name: 'Mugisha', Age: 22})
