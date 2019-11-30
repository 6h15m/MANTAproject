function imgs(){

var img = document.getElementsByTagName("img");
    for (var x = 0; x < img.length; x++) {
      img.item(x).onclick=function() {window.open(this.src)}; 
}
}

var timer;
 
 
function onOver() {
    timer = setInterval(changergb, 175);
                     
}
function onOut() {
  
  clearInterval(timer);
  var text = document.getElementById("test1"); 
  text.style.color = "rgb(0,0,0)"; 
} 
 
function changergb(){
    
    var text = document.getElementById("test1");
 
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
 
    var random_color = "rgb(" + r + "," + g + "," + b + ")";
 
    text.style.color = random_color;
}   