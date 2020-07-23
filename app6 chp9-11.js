var sub1 = +prompt("Enter marks in 1st subject");
var sub2 = +prompt("Enter marks in 2nd subject");
var sub3 = +prompt("Enter marks in 3rd subject");
var total = sub1 + sub2 + sub3;
var per = (total/300)*100;

document.write("Total marks : 300" + "<br>");
document.write("Marks obtained : " + total + "<br>");
document.write("Percentage : " + per + "%" + "<br>");

if ( per >= 80 ){
    document.write("Grade : A-one" + "<br>");
    document.write("Remarks : Excellent" + "<br>");
}
else if ( per >= 70 ){
    document.write("Grade : A" + "<br>");
    document.write("Remarks : Good" + "<br>");
}
else if ( per >= 60 ){
    document.write("Grade : B" + "<br>");
    document.write("Remarks : You need to improve" + "<br>");
}
else if ( per < 60 ){
    document.write("Grade : Fail" + "<br>");
    document.write("Remarks : Sorry" + "<br>");
}