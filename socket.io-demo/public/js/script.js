"use strict";
console.log("Hello, Node.js!");
const socket = io();
socket.on('greeting', (data) => {
    const main = document.getElementById('main');
    let p = document.createElement('p');
    p.innerHTML = data;
    main.appendChild(p);
});
socket.emit('message', document.querySelector('#main h1').innerHTML);
