var dayName = ["Sun","Mon","Tue","Wed","Thu","Sat"];
var day = rightNow.getDay();
var nowDay = dayName[day];
if (nowDay === "Sun" || nowDay === "Sat" ){
    document.write("It's Fun day" + "<br>");
}