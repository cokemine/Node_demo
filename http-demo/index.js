"use strict";
const http = require('http');
const fs = require('fs');
const url = require('url');
const SERVER = "127.0.0.1";
const PORT = 3000;
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
server.listen(PORT, SERVER);