var text = "JSResourceS.com";
var a =  "o";
var b = "";
var newText = "";

function repeat (text,a){
    document.write("Text :" + text + "<br>");
text = text.toLowerCase();
 newText = text.split("");
 checkItem = a;
  a =  0;
 for (i = 0 ; i<=newText.length ; i++){
  if(checkItem === newText[i]){
    a = ++a;
  }
 }
 b = a;
document.write("There are " + b + " occurence(s) of the word 'o'" + "<br>");
}
repeat (text,a);
