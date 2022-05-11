function validate(callback){
    let username=document.getElementById("username");
    let password=document.getElementById("password");
    if(username.value.trim()=="admin" && password.value.trim()=="12345"){
        callback();
    }
    else{
        alert("Invalid Credential");
        return false;
    }
}
function redirect(){
    window.location.href="home.html";
}
function logout(){
    window.location.href="../index.html";
}
function displaytodo(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
       var x=JSON.parse(this.responseText);
       displaytable(x);
        
    }
}
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
}

function displaytable(x){
    var table=document.getElementById("todotable");
    for (var i=0;i<x.length;i++){
        let rowcount=table.rows.length;
        var row=table.insertRow(rowcount);
        var cell1=row.insertCell(0);
        cell1.innerHTML=x[i].id;

        var cell2=row.insertCell(1);
        cell2.innerHTML=x[i].title;

        var cell3=row.insertCell(2);
        var element=document.createElement("input");
        element.type="checkbox";
        if(x[i].completed==true){
            element.setAttribute("checked","true");
            element.setAttribute("disabled","true")
        }
    element.addEventListener("change",(event)=>{
        if(event.currentTarget.checked){
            count++;
            checkCounter();
        }
        else{
            count--;
        }

    })
    cell3.appendChild(element);   
}
}

var count=0;
function checkCounter(){
    let promise=new Promise(function(resolve,reject){
        if(count==5){
            resolve("Congrats,5 task have been sucessfully completed");
        }
    })
    promise.then(function(s){
        alert(s);
    })
}
