
document.querySelector("#prebutton").addEventListener("click",
    function(){

});


document.querySelector("#nexbutton").addEventListener("click",
    function(){
        currentImage++;
        if(currentImage>=img.length)
            currentImage = 0;
        showImage();
});

function showImage(){
    pict = document.getElementById('pic');
    console.log(img[currentImage]);
}

var img = [];
img.push("img/A.jpg");
img.push("img/B.jpg");
