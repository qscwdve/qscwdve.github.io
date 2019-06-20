data = [
  "초콜릿","목장","우유","카페","사과","강장콩장장","핸드폰","가자미","베이컨","representation",
  "game","시험","하늘빛실타래로수노아","heart","사랑","삐삐","수원대학교","겨자소스","우주베키스탄","다비치",
  "divide","difficult","노트북","짬뽕","짜장면","치킨","보름달","청정구역","말레이시아","강물을오르는힘찬연어",
  "commutation","element","가면","손버릇","짜증남","버스정류장","김밥말이","민소매","공학용계산기","어린이보호구역",
  "방탄소년단","웹프로그래밍","던전공략","멘탈붕괴","자기야","구름비","수학의정석","정규분포","바베큐치킨바니니","리눅스",
  "오늘은금요일","수원역","한숨","자아성찰","두꺼비","자장가","LOVE","friend","교자만두","필요한것은종강"
]
var quest1;
var quest2;
var quest3;
var quest4;
var quest5;
var sc = document.querySelector("#score");
var ans = document.querySelector("#answer");

var score;
var random;
var time;
function start(){
  score = 0;
  time = 20;
  sc.value = score;
  document.querySelector("#main").innerHTML = "<h2 id='time'>10</h2><input type='text' value='aa' id='box1' readonly='true'><input type='text' value='bb' id='box2' readonly='true'><input type='text' value='cc' id='box3' readonly='true'><input type='text' value='dd' id='box4' readonly='true'><input type='text' value='ss' id='box5' readonly='true'>";
  quest1 = document.querySelector("#box1");
  quest2 = document.querySelector("#box2");
  quest3 = document.querySelector("#box3");
  quest4 = document.querySelector("#box4");
  quest5 = document.querySelector("#box5");
  document.querySelector("#time").innerText = time + "";
  setTimeout(end_time,1000);
}
function end_time(){
  time--;
  document.querySelector("#time").innerText = time + "";
  if(time > 0){
    setTimeout(end_time,1000);
  }
  else end();
}
function end(){
  document.querySelector("#main").innerHTML = "<h1>Game is Over..!</h1><br><h1>If you want to restart, Press this button </h1><br> <h1 id='start' onclick='start()''>START</h1>";
}
function change(){
  if(event.key == "Enter"){
    random = new Date;
    random = random.getSeconds();
    if(ans.value == quest1.value) {
      quest1.value = data[random];
      score++;
    }
    else if(ans.value == quest2.value){
      quest2.value = data[random];
      score++;
    } 
    else if(ans.value == quest3.value){
      quest3.value = data[random];
      score++;
    }
    else if(ans.value == quest4.value){
      quest4.value = data[random];
      score++;
    } 
    else if(ans.value == quest5.value){
      quest5.value = data[random];
      score++;
    } 
    ans.value = null;
    sc.value = score;
  }

}