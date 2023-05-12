let winningNumber = require('./winningNumber');
let guesses = require('./guesses');

let results = [];


function didIWin(guesses, winningNumber) {
    let result1;
    let result2;
    for (let obj of guesses){
        if (obj.guess1 > winningNumber){
            result1 = 'Your guess was too high.';
        } else if (obj.guess1 < winningNumber){
            result1 = 'Your guess was too low.'            
        } else if (obj.guess1 === winningNumber) {
            result1 = 'YOU WIN!'
        }

        if (obj.guess2 > winningNumber){
            result2 = 'Your guess was too high.';
        } else if (obj.guess2 < winningNumber){
            result2 = 'Your guess was too low.'            
        } else if (obj.guess2 === winningNumber) {
            result2 = 'YOU WIN!'
        }
    }
results.push({round: obj[i]+1,
        guess1: obj.guess1,
        result1: result1,
        guess2: obj.guess2,
        result2: result2
    });

}




console.log(results);

module.exports = results;