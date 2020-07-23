var key = Math.random()*10 + 1;
var user = +prompt("Enter any number from 1 to 10");
if (key === user){
    alert("Congratulations this is the secret key");
}
else {
    alert("Try again!");
}