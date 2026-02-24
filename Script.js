// script.js

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
 anchor.addEventListener('click', function (e) {
     e.preventDefault();

     document.querySelector(this.getAttribute('href')).scrollIntoView({
         behavior: 'smooth'
     });
 });

});

function changeLanguage(lang) {
    if (lang === "en") {
        document.getElementById("title").innerText = "Welcome";
        document.getElementById("about").innerText = "I am a developer";
    }

    if (lang === "fr") {
        document.getElementById("title").innerText = "Bienvenue";
        document.getElementById("about").innerText = "Je suis développeur";
    }

    if (lang === "ar") {
        document.getElementById("title").innerText = "مرحبا";
        document.getElementById("about").innerText = "أنا مطور";
    }
}
