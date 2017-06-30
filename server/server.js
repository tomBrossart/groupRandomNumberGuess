var express = require('express');
var app = express();
var randomNumber = require('./modules/randomNumber.js');

var path = require('path');
var port = 8000;
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));


app.post("/maxNum", function (req, res){
  var mN = req.body;
  // var rN = randomNumber(100, 400);
  console.log('received max  Number:', mN.maxNum);
  // we sent back the mN object with the .maxNum property which logged the selected maxNumber
  res.send('' + mN.maxNum); //MAKE STRING
});

//  TESTING THIS THURSDAY
// app.get("/setup", function (req, res){
//   var rN = randomNumber(100, 400);
//   console.log(rN);
//   res.send('' + rN); //MAKE STRING
// });

app.get('/*', function(req, res){
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, '/public/', file));
});

app.listen(port, function() {
  console.log('Server running on port', port);
});
