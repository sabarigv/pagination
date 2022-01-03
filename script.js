var div=document.createElement('div');
var table=document.createElement('table');
table.setAttribute('class','table table-bordered');

var thead=document.createElement('thead');
thead.setAttribute('class','thead-dark');

var tr=document.createElement('tr');
var th1=createelement('th','id');
var th2=createelement('th','name');
var th3=createelement('th','email')
tr.append(th1,th2,th3);
thead.append(tr);  

var tbody=document.createElement('tbody');
var tr=document.createElement('tr');
var td1=createelement('td', 1);
var td2=createelement('td', 'Lura Senger');
var td3=createelement('td', 'Xander_Collier@yahoo.com')
tr.append(td1,td2,td3);

var tr1=document.createElement('tr');
var td4=createelement('td', 2);
var td5=createelement('td','Wilburn Weber');
var td6=createelement('td','Bennett_Kreiger11@yahoo.com')
tr1.append(td4,td5,td6)

var tr2=document.createElement('tr');
var td7=createelement('td', 3);
var td8=createelement('td','Tyrique Hahn');
var td9=createelement('td','Juston.Altenwerth@yahoo.com')
tr2.append(td7,td8,td9)

var tr3=document.createElement('tr');
var td10=createelement('td', 4);
var td11=createelement('td','Lenny Bailey');
var td12=createelement('td','Guiseppe_Hegmann@yahoo.com')
tr3.append(td10,td11,td12)

var tr4=document.createElement('tr');
var td13=createelement('td', 5);
var td14=createelement('td','Vladimir Keeling');
var td15=createelement('td','Louisa_Walsh18@hotmail.com')
tr4.append(td13,td14,td15)

var tr5=document.createElement('tr');
var td16=createelement('td', 6);
var td17=createelement('td','Kellie Crona');
var td18=createelement('td','Chandler_Abernathy@yahoo.com')
tr5.append(td16,td17,td18)

var tr6=document.createElement('tr');
var td19=createelement('td', 7);
var td20=createelement('td','Carolina White');
var td21=createelement('td','Royal50@hotmail.com')
tr6.append(td19,td20,td21)

var tr7=document.createElement('tr');
var td22=createelement('td', 8);
var td23=createelement('td','Alfredo Conn');
var td24=createelement('td','Clarabelle34@hotmail.com')
tr7.append(td22,td23,td24)

var tr8=document.createElement('tr');
var td25=createelement('td', 9);
var td26=createelement('td','Stan Shanahan');
var td27=createelement('td','Lamar.McClure@hotmail.com')
tr8.append(td25,td26,td27)

var tr9=document.createElement('tr');
var td28=createelement('td', 10);
var td29=createelement('td','Marvin Fay');
var td30=createelement('td','Osbaldo58@hotmail.com')
tr9.append(td28,td29,td30)

tbody.append(tr,tr1,tr2,tr3,tr4,tr5,tr6,tr7,tr8,tr9);
table.append(thead,tbody);
div.append(table)
document.body.append(div);

function createelement(elename,value=""){
    var element=document.createElement(elename);
    element.innerHTML = value;
    console.log(element);
    return element;
};

var page=0
function previous(){
    if (page==2){
        table1()
    }
    if (page==3){
        table2()
    }
    if (page==4){
        table3()
    }
    if (page==5){
        table4()
    }
    if (page==6){
        table5()
    }
    if (page ==7){
        table6()
    }
    if (page==8){
        table7()
    }
    if (page==9){
        table8()
    }
    if (page==10){
        table9()
    }
}

function next(){
    console.log(page)
    if (page==1){
        table2()
    }
    else if (page==2){
        table3()
    }
    else if (page==3){
        table4()
    }
    else if (page==4){
        table5()
    }
    else if (page==5){
        table6()
    }
    else if (page==6){
        // console.log("hi")
        table7()
    }
    else if (page==7){
        table8()
    }
    else if (page==8){
        table9()
    }
    else if (page==9){
        
        table10()
    }
}

 
function first(){
    table1()
}

function last(){
    table10()
}


let res1 = fetch('https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json');
console.log(res1);
var temp;
res1.then((data)=>{
    return data.json();
}).then((data)=>{
    temp=data;
    console.log(temp);
}).catch((error)=>console.log(error));

function table1(){
    page=1;
    tbody.innerHTML=""
    for (i=0; i<10; i++){
        var tr=document.createElement("tr")
        var td1=document.createElement("td")
        var td2=document.createElement("td")
        var td3=document.createElement("td")
        td1.append(temp[i].id)
        td2.append(temp[i].name)
        td3.append(temp[i].email)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tbody.appendChild(tr)
    }
}

function table2(){
    page=2;
    tbody.innerHTML=""
    for (i=10; i<20; i++){
        var tr=document.createElement("tr")
        var td1=document.createElement("td")
        var td2=document.createElement("td")
        var td3=document.createElement("td")
        td1.append(temp[i].id)
        td2.append(temp[i].name)
        td3.append(temp[i].email)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tbody.appendChild(tr)
    }
}

function table3(){
    page=3;
    tbody.innerHTML=""
    for (i=20; i<30; i++){
        var tr=document.createElement("tr")
        var td1=document.createElement("td")
        var td2=document.createElement("td")
        var td3=document.createElement("td")
        td1.append(temp[i].id)
        td2.append(temp[i].name)
        td3.append(temp[i].email)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tbody.appendChild(tr)
    }
}

function table4(){
    page=4;
    tbody.innerHTML=""
    for (i=30; i<40; i++){
        var tr=document.createElement("tr")
        var td1=document.createElement("td")
        var td2=document.createElement("td")
        var td3=document.createElement("td")
        td1.append(temp[i].id)
        td2.append(temp[i].name)
        td3.append(temp[i].email)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tbody.appendChild(tr)
    }
}

function table5(){
    page=5;
    tbody.innerHTML=""
    for (i=40; i<50; i++){
        var tr=document.createElement("tr")
        var td1=document.createElement("td")
        var td2=document.createElement("td")
        var td3=document.createElement("td")
        td1.append(temp[i].id)
        td2.append(temp[i].name)
        td3.append(temp[i].email)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tbody.appendChild(tr)
    }
}

function table6(){
    page=6;
    tbody.innerHTML=""
    for (i=50; i<60; i++){
        var tr=document.createElement("tr")
        var td1=document.createElement("td")
        var td2=document.createElement("td")
        var td3=document.createElement("td")
        td1.append(temp[i].id)
        td2.append(temp[i].name)
        td3.append(temp[i].email)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tbody.appendChild(tr)
    }
}

function table7(){
    page=7;
    tbody.innerHTML=""
    for (i=60; i<70; i++){
        var tr=document.createElement("tr")
        var td1=document.createElement("td")
        var td2=document.createElement("td")
        var td3=document.createElement("td")
        td1.append(temp[i].id)
        td2.append(temp[i].name)
        td3.append(temp[i].email)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tbody.appendChild(tr)
    }
}

function table8(){
    page=8;
    tbody.innerHTML=""
    for (i=70; i<80; i++){
        var tr=document.createElement("tr")
        var td1=document.createElement("td")
        var td2=document.createElement("td")
        var td3=document.createElement("td")
        td1.append(temp[i].id)
        td2.append(temp[i].name)
        td3.append(temp[i].email)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tbody.appendChild(tr)
    }
}

function table9(){
    page=9;
    tbody.innerHTML=""
    for (i=80; i<90; i++){
        var tr=document.createElement("tr")
        var td1=document.createElement("td")
        var td2=document.createElement("td")
        var td3=document.createElement("td")
        td1.append(temp[i].id)
        td2.append(temp[i].name)
        td3.append(temp[i].email)
        tr.append(td1,td2,td3)
        // tr.appendChild(td2)
        // tr.appendChild(td3)
        tbody.append(tr)
    }
}

function table10(){
    page=10;
    tbody.innerHTML=""
    for (i=90; i<100; i++){
        var tr=document.createElement("tr")
        var td1=document.createElement("td")
        var td2=document.createElement("td")
        var td3=document.createElement("td")
        td1.append(temp[i].id)
        td2.append(temp[i].name)
        td3.append(temp[i].email)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tbody.appendChild(tr)
    }
}

console.log(page);