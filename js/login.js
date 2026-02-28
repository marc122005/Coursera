
let emailinp= document.getElementById("email");
let passwordinp= document.getElementById("password");
let loginbtn= document.getElementById("loginbtn");
let fnameerror= document.getElementById("fname-error");
let emailerror= document.getElementById("email-error");
let passworderror= document.getElementById("password-error");
let registernav=document.getElementById("register");

let oldName = localStorage.getItem("name");
let oldEmail = localStorage.getItem("email");
let oldPassword = localStorage.getItem("password");

console.log(oldName);
console.log(oldEmail);
console.log(oldPassword);

loginbtn.addEventListener("click", function(event){
    event.preventDefault();
    let nameexp= /^[a-zA-Z]+$/;
    let emailexp= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let passwordexp= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,12}$/;

    email.value=emailinp.value.trim();
    password.value=passwordinp.value.trim();

    if(email.value== oldEmail && password.value== oldPassword){
        emailerror.style.display="none";
        passworderror.style.display="none";
        window.location.href="index.html";
        
    }else{
        if(email.value==""){
            emailerror.textContent="email is required";
        }else if(!emailexp.test(email.value)){
            emailerror.textContent="email isn't valid";
        }else{
            emailerror.textContent="the email isn't correct";
        }
    
        if(password.value==""){
            passworderror.textContent="password is required";
        }else if(!passwordexp.test(password.value)){
            passworderror.textContent="password isn't valid";
        }else{
            passworderror.textContent="the password isn't correct";
        }
    }


})