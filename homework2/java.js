document.querySelector("#next").addEventListener("click",
    function(){
        countimg++;
        if(countimg >= img.length) 
            countimg=0;
        showimage();
});

document.querySelector("#pre").addEventListener("click",
    function(){
        countimg--;
        if(countimg < 0)
            countimg = img.length - 1;
        showimage();
});


var countimg=0;
var img = [3];
img[0] = "alex-blajan.jpg";
img[1] = "roberta-sorge.jpg";
img[2] = "alisa-anton.jpg";
var title = document.getElementById("source");
var text = [];
text.push("Photo by Alex Blăjan on Unsplash");
text.push("Photo by Roberta Sorge on Unsplash");
text.push("Photo by Alisa Anton on Unsplash");

function showimage(){
    document.getElementById("picture").src = img[countimg];
    title.innerHTML = text[countimg];
}
