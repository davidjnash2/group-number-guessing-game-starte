$('document').ready(onReady);

function onReady() {
  console.log("jquery is loaded!")

  // add submit button collect input data
  $('#submit-button').on('click', addGuess);

  getWinner();
  // winningNumber(1, 25);
}

const guess1 = $('#player-one-guess').val();
const guess2 = $('#player-two-guess').val();
const randomNum = winningNumber();
console.log(randomNum);
// moved randomNum variable to global
// let randomNum = winningNumber(1, 25);

// defining event handler for click of #submit-button
function addGuess(event){
  event.preventDefault();
  console.log( 'Guess added!', guesses );
  

  
  

  $('#player-one-guess').val('');
  $('#player-two-guess').val('');

  $.ajax({
    method: 'POST',
    url: '/guesses',
    data: {
      guess1,
      guess2
    }
  }).then(function(response) { // check if response posts
    
    console.log( 'Posted' );
    getWinner();
  }).catch(function(error){
    alert('Error with guess POST!');
    console.log( 'Error with post:', error);
  })

  

}

function renderToDom(guesses){
  $('#guesses').empty();
  console.log(guesses)
  let round = 0;
  round++;
  for (let guess of guesses){
    // conditional for winner
    $('#guesses-body').append(`
      <tr>
        <td>${round}</td>
        <td>${guess.guess1}</td>
        <td>${guess.guess2}</td>
      </tr>
    `)
  }
  
  
//   if (guess1 === randomNum  && guess2 !== randomNum){
//     $('#winnings').append(`
//     Player 1 is the Winner!
//     `)
//   } else if (guess2 === randomNum && guess1 !== randomNum){
//     $('#winnings').append(`
//     Player 2 is the Winner! Fatality!
//     `)
//   } else if (guess1 === randomNum && guess2 === randomNum){
//     $('#winnings').append(`
//     Double Fatality! ☀️🌈🦄
//     `)
//   };
// }

function getWinner(){
  $.ajax({
    method: 'GET',
    url: '/winningNumber'
  }).then(function (response){
    console.log('The winning number is:', response);
    renderToDom(response);
  }).catch(function(error){
    alert('request failed');
    console.log('request failed', error);
  });
}