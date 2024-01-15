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
