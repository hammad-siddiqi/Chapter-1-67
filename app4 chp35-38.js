var a = +prompt("Enter 1st number");
var b = +prompt("Enter 2nd number");
var c = prompt("Enter operation to perform");
function calc (a,b,c){
    if ( c === "+" ) {
        d = a + b;
        return d;
    }
    else if (c === "-" ) { 
        d = a - b;
        return d;
     }
    else if ( c === "*") {
    d = a * b;
    return d; 
    }
    else if ( c === "/") {
        d = a / b;
        return d; 
    }
    else if ( c === "%") {
        d = a % b;
        return d; 
    }
    else {
        alert("Incorrect operator!");
    }

}
calc(a,b,c);
document.write("Result is : " +  d  + "<br>");
