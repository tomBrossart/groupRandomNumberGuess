var express = require('express');
var app = express();
var randomNumber = require('./modules/randomNumber.js');
var rN = 0;
var path = require('path');
var port = 8000;
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));


app.post("/maxNum", function (req, res){
  var mN = req.body;
  console.log('received max  Number:', mN.maxNum);
  // Checking to see what our max number is ... Its a string... Which doesnt work in our function
  console.log(typeof mN.maxNum);
  // since we have to respond this is our response message
  res.send({message: 'Random Number now stored on server'}); //MAKE STRING
  rN = randomNumber(0, Number(mN.maxNum));
 console.log(rN);
});

app.post("/guesses", function (req, res) {
  //Here we are receiving our guessesArray from the client.js
  var guessesArray = req.body;
  console.log('received guessesArray', guessesArray.guesses);
  res.send({message: 'Guesses are now on the server'});
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
