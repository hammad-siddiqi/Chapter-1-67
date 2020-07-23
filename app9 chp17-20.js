var A = [24 , 53 , 78 , 91 , 12];
document.write("Array items : ");
for ( i = 0 ; i <= 4 ; i++ ){
  document.write( A[i] + ",");
}
document.write("<br>");
A.sort();
document.write("The smallest number is " + A[0] );
document.write("<br>");

