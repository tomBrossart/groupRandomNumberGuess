var express = require('express');
var app = express();
var randomNumber = require('./modules/randomNumber.js');

var path = require('path');
var port = 8000;
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.get("/setup", function (req, res){
  var rN = randomNumber(100, 400);
  res.send(rN);
  console.log(rN);
});

app.get('/*', function(req, res){
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, '/public/', file));
});

app.listen(port, function() {
  console.log('Server running on port', port);
});
