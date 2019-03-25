document.querySelector("#redbox")
    .onclick = function(){
        console.log("red ok");
        document.getElementById("title").style.color = "#f00";
}
document.querySelector("#bluebox")
    .addEventListener("click",function(){
        console.log("blue ok");
        document.getElementById("title").style.color = "#00f";
});

document.getElementById("#greenbox")
    .onclick = function(){
        console.log("green ok");
        document.getElementById("title").style.color = "#f00";
}
