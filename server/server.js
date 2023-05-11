const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

const guesses = require('./nodules/guesses');
const winningNumber = require('./nodules/winningNumber');

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}));

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));



app.post('/guesses', function(req, res){
  console.log( 'Request for guesses has been made!');
  guesses.push(req.body);
  res.sendStatus(201);
})

app.get('/guesses', function(req, res){
  console.log('Request for guess made.');
  res.send(guesses);
})

app.get('/winningNumber', function(req, res){
  console.log('Request for winning number.');
  winningNumber(1,25);
  res.send(String(res));
})

// app.post('/winningNumber', function (req, res){
//   console.log('request for winner');

// })

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})