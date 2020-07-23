var text = "The quick brown fox jumps over the lazy dog";
document.write("Text :" + text + "<br>");
text = text.toLowerCase();
var newText = text.split(" ");
checkItem = "the";
var a =  0;
 for (i = 0 ; i<=newText.length ; i++){
  if(checkItem === newText[i]){
    a = ++a;
  }
 }
var b = a;
document.write("There are " + b + " occurence(s) of the word 'the'" + "<br>");
 