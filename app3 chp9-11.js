var color = prompt("Enter color of trafffic signal");
if ( color === "Red" ){
    alert("Must stop");

}
else if ( color === "Yellow"){
    alert("Ready to move");
}
else if (color === "Green" ){
    alert("Move now");

}
else {
    alert("Please enter valid traffic signal color");
}