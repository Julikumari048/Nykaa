import navbar from "../component/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

document.querySelector("#form").addEventListener("submit",login);

var regdusers=JSON.parse(localStorage.getItem("userdetail"));

function login(){

event.preventDefault();

var enteredemail=document.querySelector("#email").value;
var enteredpassword=document.querySelector("#password").value;

for(var i=0;i<regdusers.length;i++){

if(regdusers[i].emailid==enteredemail&&regdusers[i].password==enteredpassword){
alert("Login Successfull");
window.location.href="brands.html";
break;

}
else{
    alert("Login Failed Invalid Credentials")
}

}




}