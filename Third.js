// HTTP MODULES

// const http = require('http');
// const server = http.createServer();
// server.on('connection', (socket)=> {
//     console.log('New Connection....')
// })
// server.listen(3000)
// console.log('Listen on port 3000...')

const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello World')
        res.end()
    }
    if(req.url === '/api/course'){
        res.write(JSON.stringify([1, 2, 3]))
        res.end()
    }
});
server.listen(3000)
console.log('Listen on port 3000...')