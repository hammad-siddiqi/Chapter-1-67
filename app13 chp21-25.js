var name = prompt("Enter your name");
for ( i = 0 ; i < name.length ; i++){
    if (name.charAt(i) === "!" || name.charAt(i) === "," || name.charAt(i) === "." || name.charAt(i) === "@"){
        alert("Please enter a valid username");
        break;
}
}

