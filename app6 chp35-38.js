var a = +prompt("Enter any number");
function factorial (a){
    fact = a*(a-1);
    for ( i = a-2 ; i > 0 ; i--){
    fact = fact * i;        
       
    }
    return fact ;
}
factorial(a);
alert(fact);