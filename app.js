// var http = require('http'); //add the http module
// var myServer = http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type" : "text/html"});
//   response.write("<b>Hello</b> World 2");
//   response.end();
// }); //create a server



// myServer.listen(3000);

// console.log("Go to http://localhost:3000 on your browser");


var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('<H1>Hello</H1> Express');
});

var server = app.listen(3000, function() {
  console.log('Listening on port 3000');
});