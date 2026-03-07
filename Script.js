// script.js

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
 anchor.addEventListener('click', function (e) {
     e.preventDefault();

     document.querySelector(this.getAttribute('href')).scrollIntoView({
         behavior: 'smooth'
     });
 });

});


function googleTranslateElementInit() {
    new google.translate.TranslateElement(
      { pageLanguage: 'en' },
      'google_translate_element'
    );
  
    loadSavedLanguage();
  }
  
  function saveLanguage() {
    const select = document.querySelector(".goog-te-combo");
  
    if (select) {
      select.addEventListener("change", function () {
        localStorage.setItem("siteLanguage", this.value);
      });
    }
  }
  
  function loadSavedLanguage() {
    const savedLang = localStorage.getItem("siteLanguage");
  
    if (savedLang) {
      const interval = setInterval(() => {
        const select = document.querySelector(".goog-te-combo");
  
        if (select) {
          select.value = savedLang;
          select.dispatchEvent(new Event("change"));
          clearInterval(interval);
        }
      }, 500);
    }
  
    saveLanguage();
  }