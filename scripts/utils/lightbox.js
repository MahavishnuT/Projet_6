const lightboxContainer = document.querySelector(".lightbox-container");
const backgroundLightbox = document.querySelector(".background-lightbox");
const suivant = document.querySelector(".right");
const precedent = document.querySelector(".left");

/**
 * 
 * @param {*} e 
 */
function slideSuivante() {
    
    const mediasDOM = document.querySelectorAll(".medias-container .media");
    const mediasDOMArray = Array.prototype.slice.call(mediasDOM);
    const currentMedia = document.querySelector(".active");
    const nbSlides = mediasDOM.length;
    let indexOfMedia = mediasDOMArray.indexOf(currentMedia);
    
    mediasDOMArray[indexOfMedia].classList.remove("active");
    lightboxContainer.removeChild(document.querySelector(".lightbox-container .media"));

    if (indexOfMedia < nbSlides - 1) {
        indexOfMedia++;
    }
    else {
        indexOfMedia = 0;
    }

    mediasDOMArray[indexOfMedia].classList.add("active");
    lightboxContainer.appendChild(mediasDOMArray[indexOfMedia].cloneNode(true))
}
suivant.addEventListener("click", (e) => {
    slideSuivante(e);
});

function slidePrecedente() {
    
    const mediasDOM = document.querySelectorAll(".medias-container .media");
    const mediasDOMArray = Array.prototype.slice.call(mediasDOM);
    const currentMedia = document.querySelector(".active");
    const nbSlides = mediasDOM.length;
    let indexOfMedia = mediasDOMArray.indexOf(currentMedia);
    
    mediasDOMArray[indexOfMedia].classList.remove("active");
    lightboxContainer.removeChild(document.querySelector(".lightbox-container .media"));

    if (indexOfMedia > 0) {
        indexOfMedia--;
    }
    else {
        indexOfMedia = nbSlides - 1;
    }

    mediasDOMArray[indexOfMedia].classList.add("active");
    lightboxContainer.appendChild(mediasDOMArray[indexOfMedia].cloneNode(true))
}
precedent.addEventListener("click", (e) => {
    slidePrecedente(e);
});

function keyPress(e) {
    if(e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 27) {
        e.stopPropagation();
        e.preventDefault();

        if(e.keyCode === 37) {
            slidePrecedente();
        }
        else if(e.keyCode === 39) {
            slideSuivante();
        }
        else if(e.keyCode === 27) {
            closeLightbox();
        }
    }

    else {
        return;
    }
}
document.addEventListener("keydown", keyPress);

function openLightbox() {
    backgroundLightbox.style.display = "block";
    lightboxContainer.style.display = "block";
}

function closeLightbox() {
    const mediaInLightBox = document.querySelector(".lightbox-container .media");

    backgroundLightbox.style.display = "none";
    lightboxContainer.removeChild(mediaInLightBox)
                     .style.display = "none";   
}
