var pass = prompt("Enter your password in alphanumeric from");
if (pass.length >= 6){
      if (pass.charAt(0)>=0 || pass.charAt(0)<=9 ){
      alert("Password can not begin with a number");
      alert("Please enter a valid password");
  }
  else{
    alert("Password is correct");
  }  

} 
else if( pass.length < 6) {
    alert("Password must be atleast 6 characters long");
}