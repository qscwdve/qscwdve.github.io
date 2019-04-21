//JSON DATA

data = [
    {
        "id": "1",
        "name": "Samsung S7",
        "price": "2500"
    },
    {
        "id": "2",
        "name": "Samsung S4",
        "price": "25340"
    }
];

var orderCheckid = true;
var orderCheckname = true;
var orderCheckprice = true;

var idorder = data.length;
let name;
let price;



window.onload = init;

function init() {
    document.querySelector("#save").onclick = savedata;
    showOrderData(-1,-1);
}

function savedata() {
    name = document.querySelector("#product_name").value;
    price = document.querySelector("#product_price").value;

    if (name != "" && price != "") {
        let contact = new Object();
        idorder++;
        contact.name = name;
        contact.price = price;
        contact.id = idorder.toString();
        data.push(contact);
    }
    showOrderData(-1,-1);
}

function idClick() {
    showOrderData(1, orderCheckid);
    if(orderCheckid) document.querySelector("#ID").innerHTML = "▲ ID";
    else  document.querySelector("#ID").innerHTML = "▼ ID";
    orderCheckid = !orderCheckid;
}

function nameClick() {
    showOrderData(2, orderCheckname);
    if(orderCheckname) document.querySelector("#NAME").innerHTML = "▲ Name";
    else  document.querySelector("#NAME").innerHTML = "▼ Name";
    orderCheckname = !orderCheckname;
}

function priceClick() {
    showOrderData(3, orderCheckprice);
    if(orderCheckprice) document.querySelector("#PRICE").innerHTML = "▲ Price";
    else  document.querySelector("#PRICE").innerHTML = "▼ Price";
    orderCheckprice = !orderCheckprice;
}

function showOrderData(type, order) {
    if (type == 1) {
        for (i = 0; i < data.length -1; i++) {
            for (j = i+1; j < data.length; j++) {
                if (order) {
                    if (data[i].id < data[j].id) {
                        temp = data[i];
                        data[i] = data[j];
                        data[j] = temp;
                    }
                }
                else {
                    if (data[i].id > data[j].id) {
                        temp = data[i];
                        data[i] = data[j];
                        data[j] = temp;
                    }
                }
            }
        }
    } if (type == 2) {
        for (i = 0; i < data.length -1; i++) {
            for (j = i+1; j < data.length; j++) {
                if (order) {
                    if (data[i].name < data[j].name) {
                        temp = data[i];
                        data[i] = data[j];
                        data[j] = temp;
                    }
                }
                else {
                    if (data[i].name > data[j].name) {
                        temp = data[i];
                        data[i] = data[j];
                        data[j] = temp;
                    }
                }
            }
        }
    } if (type == 3) {
        for (i = 0; i < data.length -1 ; i++) {
            for (j = i+1; j < data.length; j++) {
                if (order) {
                    if (parseInt(data[i].price) < parseInt(data[j].price)) {
                        temp = data[i];
                        data[i] = data[j];
                        data[j] = temp;
                    }
                }
                else {
                    if (parseInt(data[i].price) > parseInt(data[j].price)) {
                        temp = data[i];
                        data[i] = data[j];
                        data[j] = temp;
                    }
                }
            }
        }
    }

    tb = document.querySelector("#table");
    tb.innerHTML = "";

    for (i = 0; i < data.length; i++) {
     
        t1 = document.createElement("td");
        t2 = document.createElement("td");
        t3 = document.createElement("td");
        mtr = document.createElement("tr");
 
        t1.innerText = data[i].id;
        t2.innerHTML = "<input onkeydown='ch("+i+",1)' onclick ='change("+i+",1)' type='text' id='name"+i+"' value='"+data[i].name+"' style='border: none;'>";
        t3.innerHTML = "<input onkeydown='ch("+i+",2)' onclick ='change("+i+",2)' type='text' id='price"+i+"' value='"+data[i].price+"' style='border: none;'>";

        mtr.append(t1);
        mtr.append(t2);
        mtr.append(t3);
        tb.append(mtr);
    }
}
function ch(pp,check) {
    evt = event.key;
    if(check == 1){
        if(evt == "Escape"){
            document.querySelector("#name"+pp+"").readOnly = true;
            document.querySelector("#name"+pp+"").style.outline = 'none';
        }
        else if(evt == "Enter"){
            data[pp].name = document.querySelector("#name"+pp+"").value;
        }
    }
    else{
        if(evt == "Escape"){
            document.querySelector("#price"+pp+"").readOnly = true;
            document.querySelector("#price"+pp+"").style.outline = 'none';
        }
        else if(evt == "Enter"){
            data[pp].price = document.querySelector("#price"+pp+"").value;
        }
    }
}
function change(pp,check) {
    if(check == 1){
        document.querySelector("#name"+pp+"").readOnly = false;
        document.querySelector("#name"+pp+"").style.outline = '';
    }
    else{
        document.querySelector("#price"+pp+"").readOnly = false;
        document.querySelector("#price"+pp+"").style.outline = '';
    }
}