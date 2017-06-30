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
 var oneGuess = $('#player-one-guess').val();
  //checking to ensure player one's guess is logged.
  //console.log(oneGuess);
});



});
