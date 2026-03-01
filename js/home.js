let logoutBtn = document.querySelector('.logout');

// if user is logout , display the logout button and show the register button 
logoutBtn.addEventListener('click', function() {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    location.reload();
    logoutBtn.style.display = 'none';
});

// check if user is login or not , if user is login , hide the register button and show the logout button 
window.addEventListener('DOMContentLoaded', function(){
    const regDiv = document.getElementById('register');
    if (regDiv) {
        if (localStorage.getItem('email')) {
            regDiv.style.display = 'none';
            document.querySelector('.logout').style.display = 'block';
        }
    }
});

// this code is for show more and show less button in home page
let btnShowMore = document.getElementById("show-more");
let moreContents = document.querySelectorAll(".more");

btnShowMore.addEventListener("click", function(event){
    event.preventDefault();

    moreContents.forEach(function(box){
        if (box.style.display === "block") {
            box.style.display = "none";
            btnShowMore.textContent = "Show More";
        } else {
            box.style.display = "block";
            btnShowMore.textContent = "Show Less";
        }
    });
});