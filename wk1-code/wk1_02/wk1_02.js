// Include our libraries
var http = require('http');
var path = require('path');
var express = require('express');
var router = express();
var server = http.createServer(router);

// Use router to point requests to the 'client' folder
router.use(express.static(path.resolve(__dirname, 'files')));

// Start our server
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function () {
var addr = server.address();
console.log("Our server is listening at", addr.address + ":" + addr.port);
});


// it points to the week 2 folder
// that has a little website in it called "files"
// anytime someone types the url (localhost in this example) it will point to the "files" folder
