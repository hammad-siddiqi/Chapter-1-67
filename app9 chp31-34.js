var startDate = new Date("April 23, 2020");
var milli = startDate.getTime();
var today = rightNow.getTime();
var days = (today - milli)/(1000*60*60*24);
var dayNow = Math.floor(days);
document.write(dayNow + " days have passed since 1st Ramadan , 2020" + "<br>"); 