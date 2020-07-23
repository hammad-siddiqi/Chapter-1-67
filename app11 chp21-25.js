var value = prompt("Enter any word");
document.write("User input : " + value + "<br>");
var value1 = value.slice(0,1);
value1 = value1.toUpperCase();
var value2 = value.slice(1);
value2 = value2.toLowerCase();
document.write("Title case : " + value1 + value2 + "<br>");
