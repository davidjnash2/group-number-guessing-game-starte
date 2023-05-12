const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
const results = require('./nodules/didIWin');
const guesses = require('./nodules/guesses');

console.log('Guesses are:',guesses);
console.log('Results are:', results);


// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}));

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

app.get('/guesses', function(req, res){
  console.log('getting guesses gives:', guesses);
  res.send(guesses);
})

app.post('/guesses', function(req, res){
  console.log( 'Request for guesses has been made!');
  guesses.push(req.body);
  res.sendStatus(201);
})

app.get('/didIWin', function(req, res){
  console.log('results from appget function are:', results);
  res.send(results);
})

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})