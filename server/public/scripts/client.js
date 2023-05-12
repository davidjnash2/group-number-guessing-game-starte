$(document).ready(onReady);

function onReady() {
  console.log("jquery is loaded!")

  // add submit button collect input data
  $('#submit-button').on('click', addGuess);

  //
  getResults();
 
}

// defining event handler for click of #submit-button
function addGuess(event){
  let guess1 = $('#player-one-guess').val();
  let guess2 = $('#player-two-guess').val();

  event.preventDefault();
  console.log( 'Guess added!');
  
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
    getResults();
  }).catch(function(error){
    alert('Error with guess POST!');
    console.log( 'Error with post:', error);
  })
}


////// modify after evaluation is built
function renderToDom(results){
  $('#guesses').empty();
  console.log('The results are:', results)
  for (let result of results){
    // conditional for winner
    $('#guesses-body').append(`
      <tr>
        <td>${result.round}</td>
        <td>${result.guess1}</td>
        <td>${result.result1}</td>
        <td>${result.guess2}</td>
        <td>${result.result2}</td>
      </tr>
    `)
  }
}
  
  

function getResults(){
  $.ajax({
    method: 'GET',
    url: '/didIWin'
  }).then(function (response){
    console.log('The winning number is:', response);
    renderToDom(response);
  }).catch(function(error){
    alert('request failed');
    console.log('request failed', error);
  });
}
