let fnameinp= document.getElementById("fname");
let emailinp= document.getElementById("email");
let passwordinp= document.getElementById("password");
let signupbtn= document.getElementById("signupbtn");
let fnameerror= document.getElementById("fname-error");
let emailerror= document.getElementById("email-error");
let passworderror= document.getElementById("password-error");



signupbtn.addEventListener("click", function(event){
    event.preventDefault();
    let nameexp= /^[a-zA-Z]+$/;
    let emailexp= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let passwordexp= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,12}$/;

    fname.value=fnameinp.value.trim();
    email.value=emailinp.value.trim();
    password.value=passwordinp.value.trim();

    if(!nameexp.test(fname.value)){
        fnameerror.textContent="Please enter a valid name (only letters)";
        return;
        

    }else{
        fnameerror.textContent="";
    }

    if(!emailexp.test(email.value)){
        emailerror.textContent="Please enter a valid email";
        return;
        

    }else{
        emailerror.textContent="";
    }

    if(!passwordexp.test(password.value)){
        passworderror.textContent="invalid password";
        return;
        

    }else{
        passworderror.textContent="";
        alert("Sign up successfull!");
    }
    
    userData={
        name: fname.value,
        email: email.value,
        password: password.value
    }

    localStorage.setItem("name", fname.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    console.log(userData);
    
    window.location.href="../home/index.html";
    


})
