// var A = ["cake","apple pie","cookie","chips","patties"];
// var checkItem = prompt("Enter item to search");
// for ( i = 0 ; i <= 4  ; i++){
//     if ( checkItem === A[i]){
//         alert(checkItem + " is available at index " + i + " in our bakery" );   
//     }
      
// }     
// if( checkItem != A[i] ){
//     alert( "We are sorry, " + checkItem + " is not available in our bakery");
// }
var A = ["cake","apple pie","cookie","chips","patties"];
 var checkItem = prompt("Enter item to search");
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
