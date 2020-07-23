var startDate = new Date("January 1, 2020");
var milli = startDate.getTime();
var dateToday = new Date();
var today = rightNow.getTime();
var days = (today - milli)/(1000);
// var dayNow = Math.floor(days);
document.write("On reference date " + dateToday + "<br>");
document.write(days + " seconds had passed since the beginning of 2020" + "<br>");
