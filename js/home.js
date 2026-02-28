console.log("home js file is linked");


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