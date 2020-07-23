var rightNow = new Date();
document.write("Current Date : " + rightNow + "<br>");
var milli = rightNow.getTime();
document.write("Elapsed miiliseconds since january 1, 1970 : " + milli + "<br>");
var minutes = milli / (1000*60);
document.write("Elapsed minutes since january 1, 1970 : " + minutes + "<br>");