const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

const guesses = require('./nodules/guesses');

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}));

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})

app.post('/guesses', function(req, res){
  console.log( 'Request for guesses has been made!');
  guesses.push(req.body);
  res.sendStatus(201);
})
