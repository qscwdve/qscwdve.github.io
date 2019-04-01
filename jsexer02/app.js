/*keypress*/

window.onload = function(){


    document.querySelector("#numberonly").onkeypress=function(ev){
        //0~9 is 48~57
        if(!ev)
            ev = window.event;
    //keycode 는 아스키코드와 비슷하다
    //console.log(ev.keyCode);
        if(ev.keyCode < 48 || ev.keyCode > 57)
            ev.preventDefault();
    }
}