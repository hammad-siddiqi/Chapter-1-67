var name = prompt("Enter your name");
document.write("Customer Name : " + name + "<br>");
var monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var month = rightNow.getMonth();
var nowMonth = monthName[month];
document.write("Month : " + nowMonth + "<br>");
var units = prompt("Enter number of units");
document.write("Number of units : " + units + "<br>");
var amount = 16;
document.write("Charges per unit : " + amount + "<br>" + "<br>" + "<br>");

    var netAmount = amount*units;
    var late = 350;
    grossAmount = netAmount + late;

document.write("Net Amount Payable (within Due Date) : " + netAmount + "<br>");
document.write("Late payment surcharge : " + late + "<br>");
document.write("Gross Amount Payable (after Due Date) : " + grossAmount + "<br>");
