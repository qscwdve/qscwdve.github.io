//GETTING RESTO DATA
var xhr_get = new XMLHttpRequest();
//POSTING DATA
var xhr_post = new XMLHttpRequest();
//VAR for HOLDLING restaurant list
var restos = null;


window.onload = init();


function init(){
    xhr_get.open("GET","http://localhost/finaltest/api/list.php");
    xhr_get.send(null);

    console.log('ok');
    document.querySelector("#btn_save")
        .addEventListener('click', 
        function(){
            console.log("inside save..")
            save_resto();
        });
}


function save_resto(){
    let username = document.querySelector("#username");
    let password = document.querySelector("#password");

    console.log(username.value)
    console.log(password.value)
    
    xhr_post.open("POST","http://localhost/finaltest/api/save.php",true);
    xhr_post.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    data = " username=" + username.value 
           + "&password=" + password.value
    
    console.log(data);
    xhr_post.send(data);
   
    //CLEAR VALUES after saving...
    username.value="";
    password.value="";

}
/*
xhr_get.onreadystatechange = function(){
    var DONE = 4;
    var OK = 200;
    if(xhr_get.readyState = DONE){
        if(xhr_get.status == OK){
                data  = xhr_get.responseText;
                restos =  JSON.parse(data);
               console.log(restos);
                updateTable();
                document.querySelector("#loading").innerText="Done..";
        }
        else{
            console.log("Error");
        }
    }
}*/
/*
function updateTable(){
    let  lst = document.querySelector("#list");
    if(restos == null ) return;
    lst.innerHTML = "<tr><th>ID</th><th>Name</th><th>Action</th></tr>";

    for(i = 0; i<restos.length; i++){
        let row  = document.createElement("tr");
        let id = document.createElement("td");
        let name = document.createElement("td");
        let ac = document.createElement("td");
        let sid =  restos[i].id;
        id.innerText =  restos[i].id;
        name.innerText = restos[i].name;
        ac.innerHTML = "<a href='view.html?id="+ sid  +"'>View</a>";
        row.append(id);
        row.append(name);
        row.append(ac);
        lst.append(row);
    }
}*/