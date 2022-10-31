const lightboxContainer = document.querySelector(".lightbox-container");
const backgroundLightbox = document.querySelector(".background-lightbox");
const mediasDOM = document.querySelectorAll(".media");
const nbSlides = mediasDOM.length;
console.log("nbSlides: ", nbSlides);
const suivant = document.querySelector(".left");
const precedent = document.querySelector(".right");
let count = 0;

async function slideSuivante() {
    const displayMedias = await displayDataMedias();

    mediasDOM[count].classList.remove("active");

    if (count < nbSlide - 1) {
        count++;
    }
    else {
        count = 0;
    }

    mediasDOM[count].classList.add("active");
    console.log(count);
}
suivant.addEventListener("click", slideSuivante);


function openLightbox() {
    backgroundLightbox.style.display = "block";
    lightboxContainer.style.display = "block";
}
