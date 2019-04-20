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

window.onload = init;

var idorder = data.length;
let name;
let price;
var orderCheckid = true;
var orderCheckname = true;
var orderCheckprice = true;

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
    orderCheckid = !orderCheckid;
}

function nameClick() {
    showOrderData(2, orderCheckname);
    orderCheckname = !orderCheckname;
}

function priceClick() {
    showOrderData(3, orderCheckprice);
    orderCheckprice = !orderCheckprice;
}

function showOrderData(type, order) {
    if (type == 1) {
        for (i = 0; i < data.length ; i++) {
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
        for (i = 0; i < data.length ; i++) {
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
        for (i = 0; i < data.length ; i++) {
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
        //t2.innerText = data[i].name;
        t2.innerHTML = "<input onclick ='change("+i+",1)' type='text' id='a"+i+"' value='"+data[i].name+"'style='border: none;'>";
        //t3.innerText = data[i].price;
        t3.innerHTML = "<input onclick ='change("+i+",2)' type='text' id='a"+i+"' value='"+data[i].price+"'style='border: none;'>";

        mtr.append(t1);
        mtr.append(t2);
        mtr.append(t3);
        tb.append(mtr);
    }
}
function change(pp,check) {
    document.querySelector("#a"+pp+"").readOnly = false;
    document.querySelector("#a"+pp+"").style.outline = '';
    document.querySelector("#a"+pp+"").onkeydown = function(evt) {
       a=evt || evt.window;
       if(a.key == "Escape") {
            document.querySelector("#a"+pp+"").readOnly = true;
            document.querySelector("#a"+pp+"").style.outline = 'none';
       }
       else if(a.key == "Enter"){
            if(check == 1) data[pp].name = document.querySelector("#a"+pp+"").value;
            else data[pp].price = document.querySelector("#a"+pp+"").value;
       }
    }
}