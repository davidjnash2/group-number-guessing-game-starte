const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

let results = [];

function randomNumber(){
    return Math.floor(Math.random()*(25-1+1)+1);
}
let winningNumber=randomNumber();

console.log(winningNumber);

//1. { guess1: 3, guess2: 4 } 2. 21 
function whoWon(guesses) {
    if (guesses.guess1 > winningNumber){
      guesses.result1 = 'Your guess was too high.';
    } else if (guesses.guess1 < winningNumber){
      guesses.result1 = 'Your guess was too low.';            
    } else if (Number(guesses.guess1) === winningNumber) {
      guesses.result1 = 'YOU WIN!';
    }

    if (guesses.guess2 > winningNumber){
      guesses.result2 = 'Your guess was too high.';
    } else if (guesses.guess2 < winningNumber){
      guesses.result2 = 'Your guess was too low.';            
    } else if (Number(guesses.guess2) === winningNumber) {
      guesses.result2 = 'YOU WIN!';
    }

results.push(guesses);
}




console.log('Results are:', results);


// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}));

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

app.get('/guesses', function(req, res){
  console.log('getting guesses gives:', results);
  res.send(results);
})

app.post('/guesses', function(req, res){
  console.log( 'Request for guesses has been made!');
  console.log('req.body is', req.body);
  whoWon(req.body);
  res.sendStatus(201);
})

app.get('/results', function(req, res){
  console.log('results from appget function are:', results);
  res.send(results);
})

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})


