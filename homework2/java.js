
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
img[0] = "sanjeevan-satheeskumar.jpg";
img[1] = "bill-gierke-on-unsplash.jpg";
img[2] = "diego-ph-on-unsplash.jpg";
var title = document.getElementById("source");
var text = [];
text.push("Photo by Sanjeevan SatheesKumar on Unsplash");
text.push("Photo by bill gierke on Unsplash");
text.push("Photo by diego ph on Unsplash");

function showimage(){
    document.getElementById("picture").src = img[countimg];
    title.innerHTML = text[countimg];
}
