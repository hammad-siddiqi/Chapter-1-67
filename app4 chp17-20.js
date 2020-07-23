var number = +prompt("Enter any number");
var a = +prompt("Enter length of table");
document.write("Multliplication table of " + number + "<br>");
document.write("Length " + a + "<br>");
for ( i = 1; i <= a ; i++){
    document.write( number + " x " + i + " = " + number*i + "<br>");
      
}