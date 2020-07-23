var p = +prompt("Enter perpendicular");
document.write("Counting" + "<br>"); 
var b = +prompt("Enter base");
function hypotenuse(p, b) {
    function square(x) { return x*x; }
    return Math.sqrt(square(p) + square(b));
 }
 var result;
 result = hypotenuse(p,b);
 alert ("Hypotenuse is " +  result );