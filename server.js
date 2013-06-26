var connect = require("connect");

var app = connect()
	//.use( function(request, response) {
	//	response.end("Hello, Node.js here.");
	//})
	.use( connect.static(__dirname + "/public"))
	.listen(3000);
