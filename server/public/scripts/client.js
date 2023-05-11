const { response } = require("express");

$(document).ready(onReady);

function onReady() {
  console.log("jquery is loaded!")

  // add submit button collect input data
  $('#submit-button').on('click', addGuess);

  // getGuesses();

}

// defining event handler for click of #submit-button
function addGuess(event){
  event.preventDefault();
  console.log( 'Guess added!' );
  
  const guess1 = $('#player-one-guess').val();
  const guess2 = $('#player-two-guess').val();


  $('#player-one-guess').val('');
  $('#player-two-guess').val('');

  $.ajax({
    method: 'POST',
    url: '/guesses',
    data: {
      guess1,
      guess2
    }
  }).then(function(response){
    console.log( 'Posted' );
    getGuesses();
  }).catch(function(error){
    alert('Error with guess POST!');
    console.log( 'Error with post:', error);
  })
}