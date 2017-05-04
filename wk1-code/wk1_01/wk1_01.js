//Import the express module
var express = require('express');
var app = express();

//Define the port you want to listen to
const PORT = 3000;

//Use app.get and Handle Different requests
// req = request | res = response
app.get('/', function (req, res) {
	res.send('Hello World!');
});

//Start our Server
app.listen(PORT, function () {
 	console.log('Example app listening on port ' + PORT + '!');
});
