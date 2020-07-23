var word = prompt("Enter your word");
var check = "";
function palindrome(word){
    for ( i = word.length-1 ; i >= 0 ; i-- ){
        check += word[i];
    }
    if ( word === check ){
        alert("Word is palindrome");
    } 
    else{
        alert("Word is not palindrome");
    }
}
palindrome(word);