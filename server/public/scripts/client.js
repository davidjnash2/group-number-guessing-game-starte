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
  console.log( 'Guess added!', guesses );
  
  const guess1 = $('#player-one-guess').val();
  const guess2 = $('#player-two-guess').val();
  let randomNum = 0
  let round = 0;
  round++;

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
    // getGuesses();
  }).catch(function(error){
    alert('Error with guess POST!');
    console.log( 'Error with post:', error);
  })

  renderToDom();

}

function renderToDom(guesses){
  $('#guesses').empty();

  for (let guess of guesses){
    // conditional for winner
    $('#guesses-body').append(`
      <tr>
        <td>${round}</td>
        <td>${guess1}</td>
        <td>${guess2}</td>
      </tr>
    `)
  }
  if (guess1 === randomNum  && guess2 !== randomNum){
    $('#winnings').append(`
    Player 1 is the Winner!
    `)
  }
  else if(guess2 === randomNum && guess1 !== randomNum){
    $('#winnings').append(`
    Player 2 is the Winner! Fatality!
    `)
  }
  else if(guess1 === randomNum && guess2 === randomNum){
    $('#winnings').append(`
    Double Fatality! ☀️🌈🦄
    `)
  };
}