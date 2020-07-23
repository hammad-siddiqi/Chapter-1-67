var value = "the quick brown fox";
function heading (value){
    arr = value.split(" ");
    for (i=0; i<arr.length ;i ++ ){
     value1 = arr[i].slice(0,1);
    value1 = value1.toUpperCase();
    value2 = arr[i].slice(1);
    value2 = value2.toLowerCase();
    document.write(value1 + value2 + " ")
    }

}
heading(value);
document.write("<br>");