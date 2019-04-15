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
var b;

function Ball(x,y,size,xp,yp,speed,color){
  this.x = x;
  this.y = y;
  this.size = size;
  this.speed = speed;
  this.color = color;
  this.xp = xp;
  this.yp = yp;

  this.draw = function(ctx){
    ctx.fillStyle = "#77f";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
    ctx.fill();
  }
  this.update = function(){
    if(this.y >= canvas.height - 20 || this.y < 20) this.yp *= -1;
    if(this.x >= canvas.width - 20 || this.x < 20) this.xp *= -1;
    this.y += this.yp;
    this.x += this.xp;
  
  }
}

function init() {
  canvas = document.getElementById("game_area");
  ctx = canvas.getContext("2d");
  
  var b = new Ball(20,20,20,5,5,"#f7f");
  var c = new Ball(200,120,10,5,5,"#f7f");

  b.draw(ctx);
  c.draw(ctx);
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

  });

}
function loop(){
  if(running){
    b.update();
    c.update();
    b.draw(ctx);
    c.draw(ctx);
    requestAnimationFrame(loop);
  }
}

