/* Filename: app.js
   Javascript for Game 2 Homework
*/

//alert("ok");
//console.log("ok");

window.onload = init;
var yp = 1;
var canvas;
var ctx;
var y = 20;
var x = 20;
var xp = 1;
var running = false;
function init() {
  canvas = document.getElementById("game_area");
  ctx = canvas.getContext("2d");
  draw();

  document.querySelector("#start").addEventListener("click",function(){

    if(running){ 
      running = false;
      this.innerHTML = "Start";     //button 글자 바꾸기
      return ;
    }
    else{
      running = true;
      this.innerHTML = "Stop";
    }

    update();

  });

}

function update(){

  if(y >= canvas.height - 20 || y < 20) yp *= -1;
  if(x >= canvas.width - 20 || x < 20) xp *= -1;
  y += yp;
  x += xp;
  draw();
  
  if(running)
    setTimeout(update,10);
}

function draw(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  ctx.fillStyle = "#77f";
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, 2*Math.PI);
  ctx.fill();
}

