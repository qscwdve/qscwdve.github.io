
var number = 0;

window.onload = function() {

    setTimeout(countup,1000);
    shownumber();

}

function countup(){
    
    number++;
    shownumber();
    if(number < 100)
        setTimeout(countup,100);
   
}
function shownumber(){
    document.querySelector("#display").innerHTML = number;
}