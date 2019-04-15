
var number = 0;
var number2 = 0;
window.onload = function() {
    countup();
    countup2();
}

function countup(){
    number++;
    shownumber();
    if(number < 100)
    requestAnimationFrame(countup);  // 컴퓨터 성능에 따라 빠르기가 달라짐
}
function shownumber(){
    document.querySelector("#display1").innerHTML = number;
}
function countup2(){
    number2++;
    shownumber2();
    if(number2 < 100)
        setTimeout(countup2, 100);
}
function shownumber2(){
    document.querySelector("#display2").innerHTML = number2;
}