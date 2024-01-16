// const from nav bar 

const navItems = document.querySelector(".nav-items");
const navIcon = document.querySelector(".nav-icon");
const servicesIcon = document.getElementById("service-desktop");
const servicesPopup = document.querySelector(".services-popup");
const mobileNav = document.querySelector(".mobile-nav");
const CloseMobile = document.getElementById("close-mobile");
const main = document.querySelector(".main");
const servicesClose = document.getElementById("service-popup-close");
const mobileServiceClose = document.querySelector(".service-popup-close");
const mobileServiceIcon = document.getElementById("mobile-service-icon");
const serviceMobilePopup = document.querySelector(".service-mobile-popup");




// NAV SECTION 
navIcon.addEventListener("click", ()=>{
    mobileNav.classList.remove("inactive");
    main.classList.add("active")
});

CloseMobile.addEventListener("click", ()=>{
    mobileNav.classList.add("inactive");
    main.classList.remove("active")
});

servicesIcon.addEventListener("click", ()=>{
   servicesPopup.classList.toggle("display");
});

servicesClose.addEventListener("click", ()=>{
    servicesPopup.classList.add("display");
});

mobileServiceIcon.addEventListener("click", ()=>{
    serviceMobilePopup.classList.toggle("display");
 });
 
 mobileServiceClose.addEventListener("click", ()=>{
     serviceMobilePopup.classList.add("display");
 });



//  loading Animation 

 const loadingDiv = document.querySelector(".loading");
    
 window.addEventListener('load', function() {
    if (loadingDiv) {
        loadingDiv.style.display = 'none';
    }
});
