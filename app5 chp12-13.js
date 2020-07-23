var pass = "hello@1234";
var userPass = prompt("Enter Your password");

if ( userPass === ""){
    alert("Please enter your password");

}
else if ( userPass === pass ){
    alert("Correct!The password you entered matches thhe original password");
}
else {
    alert("Incorrect password");
}
