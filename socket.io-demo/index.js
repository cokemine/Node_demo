const http = require('http');
const fs = require('fs');
const io = require('socket.io');
const PORT = 3000;
const SERVER = "127.0.0.1";

const server = http.createServer((req, res) => {
    if (req.url == '/') req.url = '/index.html';
    const www = './public' + req.url;
    fs.readFile(www, (err, data) => {
        if (err) {
            res.write("<h1>404 Not Found</h1>");
            res.write("Welcome to " + req.url + "<br>" + "but the file you requested seems not found on the server. Please check your link!")
        } else {
            res.write(data);
        }
        res.end();
    });
});
const socket = io(server);
socket.on('connection', (s) => {
    console.log('a user connected');
    s.on('message', (msg) => {
        console.log('message: ' + msg);
    });
    s.emit('greeting', "Hello, message from socket.io server side");
});
socket.on('disconnect', (s) => {
    console.log('user disconnected');
});
server.listen(PORT, SERVER);