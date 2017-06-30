var maxNum = 0;
var guesses = [];
var totalGuesses = 0;

$(document).ready(function() {
  console.log('nice and easy');
  // on document load just show setup mode
  $('#play-mode').hide();

  // take user radio selection with click listener and pass to server
  $('#start-game').on('click', function(){
    $('#setup-mode').hide();
    $('#play-mode').show();
    // selecting maxnumber from setup and setting as var
    maxNum = $('input:radio[name=max]:checked').val();
    $('#maximum-number').text(' ' + maxNum);
    var selection = $('radio').val();
    $.ajax({
      type: 'POST',
      url: '/maxNum',   // address route for getting/putting data from server
      data: {maxNum: maxNum},
      success: function(response) {
        console.log("request received");
        console.log(response);
        // connect up button
        }
      });
  });

$('#submit-guess').on('click', function (){
  guesses = [];
   var oneGuess = $('#player-one-guess').val();
   var twoGuess = $('#player-two-guess').val();
   var threeGuess = $('#player-three-guess').val();
   var fourGuess = $('#player-four-guess').val();
   guesses.push(oneGuess, twoGuess, threeGuess, fourGuess);
   console.log(guesses);
   $('#total-guesses').text(' ' + (totalGuesses += 4));
    //checking to ensure player one's guess is logged.
    //console.log(oneGuess);
    $.ajax({
    //Here were are sending our guessesArray to the server.
      type: 'POST',
      url: '/guesses',
      data: {guesses: guesses},
      success: function(response) {
        console.log("guesses sent");
        console.log(response.guessChecker);
        $('#last-guess-one').text(response.guessChecker[0].lastGuess +
                                  " -- " + response.guessChecker[0].message);
        $('#last-guess-two').text(response.guessChecker[1].lastGuess +
                                  " -- " + response.guessChecker[1].message);
        $('#last-guess-three').text(response.guessChecker[2].lastGuess +
                                  " -- " + response.guessChecker[2].message);
        $('#last-guess-four').text(response.guessChecker[3].lastGuess +
                                  " -- " + response.guessChecker[3].message);
        }
    });
});

$('#restart-game').on('click', function (){
  $('#setup-mode').show();
  $('#play-mode').hide();
  // to uncheck the radio selection
  $('input:radio[name=max]:checked').prop('checked', false);
  $('#player-one-guess').val('');
  $('#player-two-guess').val('');
  $('#player-three-guess').val('');
  $('#player-four-guess').val('');
  $('#last-guess-one').text('');
  $('#last-guess-two').text('');
  $('#last-guess-three').text('');
  $('#last-guess-four').text('');
  $('#total-guesses').text('0');

  // here we're sending a request from client to server to reset values in server
  // PROBABLY DON'T NEED THIS
  // $.ajax({
  //   type: 'POST',
  //   url: '/reset',
  //   data: {reset: reset},
  //   success: function(response) {
  //     console.log("reset request sent");
  //   }
  //   });
  });
});
