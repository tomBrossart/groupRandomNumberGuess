$(document).ready(function() {
  console.log('nice and easy');
  // on document load just show setup mode
  $('#play-mode').hide();

  // take user radio selection with click listener and pass to server
  $('#start-game').on('click', function(){
    var selection = $('radio').val();
  });



  // $.ajax({
  //   type: 'POST',
  //   url: '/',   // address route for getting/putting data from server
  //   success: function(response) {
  //     console.log("request received");
  //     // connect up button
  //     }
  //   });

});
