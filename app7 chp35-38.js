var a = +prompt("Enter starting number");
document.write("Counting" + "<br>"); 
var b = +prompt("Enter ending number");
function counting (a,b){
    for ( i = a ; i < b ; i++){
        document.write(i + "<br>");
    }
}
counting(a,b);
document.write(b + "<br>");
