var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('default', {
    title: 'Home',
    users: ['Ray', 'Morten', 'James']
  });
});

app.get('/me', function(req, res) {
  res.send('@planetoftheweb');
});

app.get('/who/:name?', function(req, res) {
  var name = req.params.name;
  res.send(name + ' was here');
});

app.get('/who/:name?/:title?', function(req, res) {
  var name = req.params.name;
  var title = req.params.title;
  res.send('<p>name: ' + name + '<br>title: ' + title + '</p>');
});

app.get('*', function(req, res) {
  res.send('Bad Route');
});

var server = app.listen(3000, function() {
  console.log('Listening on port 3000');
});

// // var http = require('http'); //add the http module
// // var myServer = http.createServer(function(request, response) {
// //   response.writeHead(200, {"Content-Type" : "text/html"});
// //   response.write("<b>Hello</b> World 2");
// //   response.end();
// // }); //create a server



// // myServer.listen(3000);

// // console.log("Go to http://localhost:3000 on your browser");


// // var express = require('express');
// // var app = express();

// // app.get('/', function(req, res) {
// //   res.send('<H1>Hello</H1> Express');
// // });

// // var server = app.listen(3000, function() {
// //   console.log('Listening on port 3000');
// // });


// var express = require('express');
// var app = express();

// app.get('/', function(req, res) {
//   res.send('<H1>Hello</H1> Express');
// });

// app.get('/me', function(req, res) {
//   res.send('@planetoftheweb');
// });

// app.get('/who/:name?', function(req, res) {
//   var name = req.params.name;
//   res.send(name + ' was here');
// });

// app.get('/who/:name?/:title?', function(req, res) {
//   var name = req.params.name;
//   var title = req.params.title;
//   res.send('<p>name: ' + name + '<br>title: ' + title + '</p>');
// });


// app.get(['/redirect','/godaddy'], function(req, res) {
//   res.redirect('http://www.godaddy.com');
// });

// app.get('*', function(req, res) {
//   res.send(404,'Bad Route');
// });

// var server = app.listen(3000, function() {
//   console.log('Listening on port 3000');
// });