var r =  +prompt("Enter radius of a circle");
function calcCircumference(r){
    c = 2*(3.142)*r;
    return c;    
}
function calcArea(r){
    a = (3.142)*r**2;
    return a;    
}
calcCircumference(r);
calcArea(r);
document.write("The circumference is " + c + "<br>");
document.write("The area is " + a + "<br>");
