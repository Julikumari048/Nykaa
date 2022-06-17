import navbar from "../component/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

document.getElementById("form").addEventListener("submit",signUp);

var userData=JSON.parse(localStorage.getItem("userdetail"))||[];

function signUp(){

    event.preventDefault();
    

var userobj={

username:document.querySelector("#username").value,
phonenum:document.querySelector("#phone").value,
emailid:document.querySelector("#email").value,
password:document.querySelector("#password").value,
}



userData.push(userobj);

localStorage.setItem("userdetail",JSON.stringify(userData));
window.location.href="login.html"



}