/* calculator */

//alert("ok");

//페이지가 로드된 다음에 실행됨
window.onload = function(){
  
    document.querySelector("#b_add").onclick=function(){
       compute('+');
    };
    document.querySelector("#b_sub").onclick=function(){
        compute('-');
     };
     document.querySelector("#b_div").onclick=function(){
        compute('/');
     };
     document.querySelector("#b_mult").onclick=function(){
        compute('*');
     };
    
}

function compute(op){
    let a = document.querySelector("#n1");
    let b = document.querySelector("#n2");

    let c = 0;
    switch(op){
        case '+': c = (parseInt(a.value) + parseInt(b.value));
        break;
        case '-': c = (parseInt(a.value) - parseInt(b.value));
        break;
        case '*': c = (parseInt(a.value) * parseInt(b.value));
        break;
        case '/': c = (parseInt(a.value) / parseInt(b.value));
        break;
        default: break;
    }
    //div tag is innerHTML / innerText
    document.querySelector("#output").innerHTML = c;
    //input tag is value
    document.querySelector("#output2").value = c;
}