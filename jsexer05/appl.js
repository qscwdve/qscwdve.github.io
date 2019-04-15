
var number = 0;
var holder;
window.onload = function() {

    holder = setInterval(countup,100)
    //shownumber();

}

function countup(){
    if(number <100)
        number++;
    else 
        clearInterval(holder);
    console.log(".");
    shownumber();
   
}
function shownumber(){
    document.querySelector("#display").innerHTML = number;
}