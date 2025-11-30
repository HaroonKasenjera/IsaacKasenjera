const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-bar');
const navLinks = document.querySelectorAll('.nav-bar a');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

window.addEventListener('click', (e) => {
    if (nav.classList.contains('active') && !menuToggle.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('active');
    }
});

function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,  
        message : document.getElementById("message").value 
     }

     emailjs.send("service_8brjh7d","template_sjkrb5e",parms).then(function(){
        alert("Email sent!!"); })
}