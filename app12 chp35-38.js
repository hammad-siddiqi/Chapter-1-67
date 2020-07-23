// var value = "Web Development Tutorial";
// var text = [];
// var a,b,c = "";
// var A,B,C = 0; 
// function longest (value){
//     text = value.split(" ");
//     alert(text);
//     a = text[0].toString();
//     A = a.length;
//     b = text[1].toString();
//     B = b.length;
//     c = text[2].toString();
//     C = c.length;

//     if (A > B > C || A > C > B){
//         document.write(A);
//     }
//     else if ( B > A > C || B > C > A ){
//         document.write(B);
//     }
//     else if ( C > A > B || C > B > A){
//         document.write(C);
//     }

  
    

// }
// longest(value);
// document.write("<br>");

// var device = [];
// device[0] = "keyboard";
// device[1] = "mouse";
// device[2] = "printer";
// device[3] = "monitor";
// document.write("Devices : " + "<br>" + device + "<br>" );
// var a = device.shift();
// document.write("Out" + "<br>" + a + "<br>");
// var b = device.shift();
// document.write("Out" + "<br>" + b + "<br>");
// var c = device.shift();
// document.write("Out" + "<br>" + c + "<br>");
// var d = device.shift();
// document.write("Out" + "<br>" + d + "<br>");

var value = "Web Development Tutorial";
var text = [];
function longest (value){
        text = value.split(" ");
     alert(text);
     a = text.shift();
     A = a.length;
     b = text.shift();
     B = b.length;
     c = text.shift();
      C = c.length;
    //  document.write("Out" + "<br>" + A + "<br>");
    //  document.write("Out" + "<br>" + B + "<br>");
    //  document.write("Out" + "<br>" + C + "<br>");
     if (A > B && A > C ){
                 document.write(a + "<br>");
        }
             else if ( B > A  && B > C  ){
                 document.write(b + "<br>");
        }
             else if ( C > A  && C > B ){
                 document.write(c + "<br>");
        }
          
} 
longest(value);
