window.onload = mainfunction;

function mainfunction() {
    document.querySelector("#save").onclick = save;
}

function save(){
    
     ln = document.querySelector("#lastname").value;
     fn = document.querySelector("#firstname").value;
     phone = document.querySelector("#phonenumber").value;

    console.log(ln);
    console.log(fn);
    console.log(phone);

    tb = document.querySelector("#datax");   // "tbody"
    mtr = document.createElement("tr");
    //short but 
    /* mtr.innerHTML = "<td>" + ln + "</td><td>" + fn + "</td><td>" + phone + "</td>"    */

    //this method is easy to understand
    td1 = document.createElement("td");
    td2 = document.createElement("td");
    td3 = document.createElement("td");
    td4 = document.createElement("td");

    td1.innerText = ln;
    td2.innerText = fn;
    td3.innerText = phone;
    td4.classList = "text-center";
    td4.innerHTML = "<img onclick='del(this);' src='delete.png'/>";

    mtr.append(td1);
    mtr.append(td2);
    mtr.append(td3);
    mtr.append(td4);
    tb.append(mtr);
    
}
function del(obj){
    obj.parentNode.remove();
    
}