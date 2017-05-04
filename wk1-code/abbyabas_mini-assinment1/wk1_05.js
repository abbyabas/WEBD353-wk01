// Include our libraries
var http = require('http');
var path = require('path');
var socketio = require('socket.io');
var express = require('express');
// for the random number
var rn = require('random-number');
var router = express();
var server = http.createServer(router);
var io = socketio.listen(server);
// Use router to point requests to the 'files' folder
router.use(express.static(path.resolve(__dirname, 'files')));
// Variables to hold the messages and the sockets

io.on('connection', function (socket) {
    console.log('a user connected');
    // generates the random number
    console.log(rn());
    socket.on('chat message', function (msg) {
        console.log(msg);
        io.emit('chat message', msg);
    });
    // when the button is clicked
    socket.on('button-clicked', function (data) {
        console.log(data);
        // do send number
        io.emit('send-number', rn());
    });
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});
// Start our server
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function () {
    var addr = server.address();
    console.log("Our server is listening at", addr.address + ":" + addr.port);
});
