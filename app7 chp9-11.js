var key = 7;
var attempt = +prompt("Guess the secret key");
if (attempt === key){
    alert("Bingo!Correct answer.");
}
else if (attempt === key+1){
    alert("Close enough to the correct answer.");
}
else {
    alert("Try again.");
}