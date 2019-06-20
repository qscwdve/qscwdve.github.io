
var mi = 1;
var ex = -1;
var ho = 1;
var info =1;
var fin = -1;
var sc = 1;
var et = -1;
var photo = 0;
var photo_name = [
    "Photo by Markus Spiske on Unsplash",
    "Photo by Diego PH on Unsplash",
    "Photo by Cel Lisboa on Unsplash",
    "Photo by Serghei Savchiuc on Unsplash"
];
var photo_src = [
    "https://images.unsplash.com/photo-1478676584648-9f4e1f30ec1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1508020268086-b96cf4f4bb2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1453831362806-3d5577f014a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1038&q=80",
    "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
]
function picture(check){
    if(check == 1) photo--;
    else photo++;
    if(photo == 4) photo = 0;
    else if(photo == -1) photo = 3;
    document.querySelector("#pic_title").innerHTML = photo_name[photo];
    document.querySelector("#picture").src = photo_src[photo];
}


function change_mi(){
    if(mi == 1){
        document.querySelector("#text3").innerHTML = "<a href='Midterm/index.html'><font color='white'><li>midterm-project</li></font></a>";
    }
    else {
        document.querySelector("#text3").innerHTML = "";
    }
    mi *= -1;
}
function change_ex(){
    if(ex == 1){
        document.querySelector("#text").innerHTML = "<a href='exer04/index.html' ><font color='white'><li>exercise#04</li></font></a><a href='jsexer01/index.html'><font color='white'><li>jsexer #01</li></font></a><a href='jsexer02/index.html'><font color='white'><li>jsexer #02</li></font></a><a href='jsexer03/index.html'><font color='white'><li>jsexer #03</li></font></a><a href='bb3/index.html'><font color='white'><li>bb3</li></font></a>";
    }
    else{
        document.querySelector("#text").innerHTML = "";
    }
    ex *= -1;
}
function change_ho(){
    if(ho == 1){
        document.querySelector("#text2").innerHTML = "<a href='homework/cssprogram.html' ><font color='white'><li>CSS animation</li></font></a><a href='homework2/javascript.html' ><font color='white'><li>My gallery</li></font></a><a href='homework3/index.html' ><font color='white'><li>Calculator</li></font></a><a href='bb3/index.html'><font color='white'><li>ball control</li></font></a>";
    }
    else {
        document.querySelector("#text2").innerHTML = "";
    }
    ho *= -1;
}
function change_in(){
    if(info == 1){
        document.querySelector("#text4").innerHTML = "<font color='white'><li>name : kim yun hee</li></font><font color='white'><li>major : information security</li></font>";
    }
    else {
        document.querySelector("#text4").innerHTML = "";
    }
    info *= -1;
}
function change_fin(){
    if(fin == 1){
        document.querySelector("#text5").innerHTML = "<a href='finaltest/login.php' ><font color='white'><li>final-project</li></font></a>";
    }
    else {
        document.querySelector("#text5").innerHTML = "";
    }
    fin *= -1;
}
function change_sc(){
    if(sc == 1){
        document.querySelector("#text6").innerHTML = "<a href='https://www.suwon.ac.kr' ><font color='white'><li>suwon university</li></font></a>";
    }
    else {
        document.querySelector("#text6").innerHTML = "";
    }
    sc *= -1;
}
function change_et(){
    if(et == 1){
        document.querySelector("#text7").innerHTML = "<a href='https://www.google.com' ><font color='white'><li>Google</li></font></a><a href='https://www.naver.com' ><font color='white'><li>NAVER</li></font></a>";
    }
    else {
        document.querySelector("#text7").innerHTML = "";
    }
    et *= -1;
}
