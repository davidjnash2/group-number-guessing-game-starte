function winningNumber(){
    return Math.floor(Math.random()*(25-1+1)+1);
}

console.log(winningNumber(1,25));

module.exports = winningNumber;