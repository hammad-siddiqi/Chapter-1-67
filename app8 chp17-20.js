var A = [24 , 53 , 78 , 91 , 12];
document.write("Array items : ");
for ( i = 0 ; i <= 4 ; i++ ){
  document.write( A[i] + ",");
}
document.write("<br>");
A.sort();
document.write("The largest number is " + A[4] );
document.write("<br>");

