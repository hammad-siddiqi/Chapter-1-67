var img = document.getElementById("modal");
var arr = ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.png","images/5.jpg","images/6.jpg","images/7.png","images/8.jpg","images/8.jpg","images/9.jpg","images/10.jpg","images/11.jpg","images/12.jpg","images/13.jpg","images/14.png","images/15.jpg"];



for ( i = 0; i < arr.length ; i++ ){
 img.innerHTML += '<img src=\"'+arr[i]+'\">';
}


function image(){
    var a = document.getElementById("modal");
    modal.classList.add('modal-open');
    modal.classList.remove('modal-close');
    this.style.display = "block";
    document.getElementById("myImg").src = arr[i];
}

function onClosedImagModal(){
    modal.classList.add('modal-close');
    modal.classList.remove('modal-open');
    setTimeout(()=>{ modal.style.display = "none"; }, 550);
}