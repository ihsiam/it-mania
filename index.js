const hbtn = document.getElementById("hbtn");
const sbtn = document.getElementById("sbtn");
const cbtn = document.getElementById("cbtn");
const fbtn = document.getElementById("fbtn");
const pbtn = document.getElementById("pbtn");


const home = document.getElementById("home");
const service = document.getElementById("service");
const contact = document.getElementById("contact");
const feedback = document.getElementById("feedback");
const profile = document.getElementById("profile");


home.style.display = "flex";
service.style.display = "none";
contact.style.display = "none";
feedback.style.display = "none";
profile.style.display = "none";

hbtn.addEventListener("click", () =>{

    view(home,service,contact,profile,feedback);

});


sbtn.addEventListener("click", () =>{

    view(service,home,contact,profile,feedback);

});

cbtn.addEventListener("click", () =>{

    view(contact,service,home,profile,feedback);

});

fbtn.addEventListener("click", () =>{

    view(feedback,service,home,contact,profile);

});

pbtn.addEventListener("click", () =>{

    view(profile,service,home,contact,feedback);

});

function view(active,d1,d2,d3,d4){
    active.style.display = "flex";
    d1.style.display = "none";
    d2.style.display = "none";
    d3.style.display = "none";
    d4.style.display = "none";
}