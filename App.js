// const path = require('path')

// const pathOBJ = path.pa(__dirname);
// console.log(pathOBJ)

const os = require('os');

var freeMemory = os.freemem();
var totalMemory = os.totalmem();

console.log(`Free Memory: ${freeMemory}`)
console.log(`Total Memory: ${totalMemory}`)

const fs = require('fs');

fs.readdir('@', function(Errr, File) {
    if(Errr){
        console.log('Error', Error)
    }else{
        console.log('Result', File)
    }

})

const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged', function(eventArg){
    console.log('Listerner Called', eventArg)
})
emitter.emit('messageLogged', {id: 10, url: 'http://google.com'})

