var value1 = +prompt("Enter a value");
var value2 = +prompt("Enter another value");
var sign = prompt("Enter operation to perform");

if ( sign === "+" ){
    var sum = value1 + value2;
    alert("Sum is : " + sum);
}
else if ( sign === "-"){
    var difference = value1 - value2;
    alert("Difference is : " + difference);
}
else if ( sign === "*"){
    var Product = value1 * value2;
    alert("Product is : " + Product);
}
else if ( sign === "/"){
    var division = value1 / value2;
    alert("Division is : " + division);
}
else if ( sign === "%"){
    var remainder = value1 % value2;
    alert("Remainder is : " + remainder);
}
else {
    alert("Wrong entry");
}