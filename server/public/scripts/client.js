var maxNum = 0;
var guesses = [];


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
      $('#last-guess-one').text(response.guessChecker[0].message)
      }
    });
});



});
