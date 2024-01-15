// VALUES SECTION 

const valuesBtn = document.querySelectorAll(".values-btn");
const valuesTitle = document.querySelectorAll(".values-t");
const valuesP = document.querySelectorAll(".values-p")

valuesBtn[0].addEventListener("click", ()=> {
    valuesBtn[0].classList.add("active");
    valuesBtn[1].classList.remove("active");
    valuesBtn[2].classList.remove("active");

    valuesTitle[0].classList.remove("display");
    valuesTitle[1].classList.add("display");
    valuesTitle[2].classList.add("display");

    valuesP[0].classList.remove("display");
    valuesP[1].classList.add("display");
    valuesP[2].classList.add("display");

});

valuesBtn[1].addEventListener("click", ()=> {
    valuesBtn[0].classList.remove("active");
    valuesBtn[1].classList.add("active");
    valuesBtn[2].classList.remove("active");

    valuesTitle[0].classList.add("display");
    valuesTitle[1].classList.remove("display");
    valuesTitle[2].classList.add("display");

    valuesP[0].classList.add("display");
    valuesP[1].classList.remove("display");
    valuesP[2].classList.add("display");
});

valuesBtn[2].addEventListener("click", ()=> {
    valuesBtn[0].classList.remove("active");
    valuesBtn[1].classList.remove("active");
    valuesBtn[2].classList.add("active");

    valuesTitle[0].classList.add("display");
    valuesTitle[1].classList.add("display");
    valuesTitle[2].classList.remove("display");

    valuesP[0].classList.add("display");
    valuesP[1].classList.add("display");
    valuesP[2].classList.remove("display");

});



/* ////// REVIEW SECTION ////// */
const testimonyContainer = document.querySelector(".testimony-container");
const testimonys = document.querySelectorAll(".testimony");

let currentSlide = 0;

function updateSlide() {
    testimonyContainer.style.transform = `translateX(${-currentSlide * testimonys[0].clientWidth}px)`;
    
}

function nextSlide() {
    if (currentSlide < testimonys.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    updateSlide();

}

document.addEventListener('DOMContentLoaded', () => {
    updateSlide();
    setInterval(nextSlide, 5000); // Run autoSlide every 3 seconds (3000 milliseconds)
});


/* ////// FAQ SECTION ////// */

const faqPlus = document.querySelectorAll(".faq-plus");
const faqAnswer =document.querySelectorAll(".faq-answer");

faqPlus[0].addEventListener("click", ()=> {
    faqAnswer[0].classList.toggle("display")
});
faqPlus[1].addEventListener("click", ()=> {
    faqAnswer[1].classList.toggle("display")
});
faqPlus[2].addEventListener("click", ()=> {
    faqAnswer[2].classList.toggle("display")
});
faqPlus[3].addEventListener("click", ()=> {
    faqAnswer[3].classList.toggle("display")
});
