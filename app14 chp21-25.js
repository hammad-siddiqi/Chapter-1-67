var A = ["cake","apple pie","cookie","chips","patties"];
 var checkItem = prompt("Welcome to ABC bakery.What do you want to order sir/ma'am?");
 checkItem = checkItem.toLowerCase();
var matchFound = false;
 for ( i = 0 ; i <= 4  ; i++){
     if ( checkItem === A[i]){
         matchFound = true;
         alert(checkItem + " is available at index " + i + " in our bakery" );   
    }
}
if (matchFound === false){
    alert("We are sorry, " + checkItem + " is not available in our bakery")
}     
