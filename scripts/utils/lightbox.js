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
    const titlesDOM = document.querySelectorAll(".medias-container article h2");
    const titlesDOMArray = Array.prototype.slice.call(titlesDOM);
    const nbSlides = mediasDOM.length;
    let indexOfMedia = mediasDOMArray.indexOf(currentMedia);
    
    
    mediasDOMArray[indexOfMedia].classList.remove("active");
    titlesDOMArray[indexOfMedia].classList.remove("active-title");
    lightboxContainer.removeChild(document.querySelector(".lightbox-container .media"));
    lightboxContainer.removeChild(document.querySelector(".lightbox-container .media-title"));

    if (indexOfMedia < nbSlides - 1) {
        indexOfMedia++;
    }
    else {
        indexOfMedia = 0;
    }

    mediasDOMArray[indexOfMedia].classList.add("active");
    titlesDOMArray[indexOfMedia].classList.add("active-title");
    lightboxContainer.append(mediasDOMArray[indexOfMedia].cloneNode(true), titlesDOMArray[indexOfMedia].cloneNode(true));
    if (mediasDOMArray[indexOfMedia].cloneNode().tagName == "VIDEO") {
        mediasDOMArray[indexOfMedia].setAttribute("autoplay", "");
        mediasDOMArray[indexOfMedia].setAttribute("controls", "");
    }
}
suivant.addEventListener("click", (e) => {
    slideSuivante(e);
});

function slidePrecedente() {
    
    const mediasDOM = document.querySelectorAll(".medias-container .media");
    const mediasDOMArray = Array.prototype.slice.call(mediasDOM);
    const currentMedia = document.querySelector(".active");
    const titlesDOM = document.querySelectorAll(".medias-container article h2");
    const titlesDOMArray = Array.prototype.slice.call(titlesDOM);
    const nbSlides = mediasDOM.length;
    let indexOfMedia = mediasDOMArray.indexOf(currentMedia);
    
    mediasDOMArray[indexOfMedia].classList.remove("active");
    titlesDOMArray[indexOfMedia].classList.remove("active-title");
    lightboxContainer.removeChild(document.querySelector(".lightbox-container .media"));
    lightboxContainer.removeChild(document.querySelector(".lightbox-container .media-title"));

    if (indexOfMedia > 0) {
        indexOfMedia--;
    }
    else {
        indexOfMedia = nbSlides - 1;
    }

    mediasDOMArray[indexOfMedia].classList.add("active");
    titlesDOMArray[indexOfMedia].classList.add("active-title");
    lightboxContainer.append(mediasDOMArray[indexOfMedia].cloneNode(true), titlesDOMArray[indexOfMedia].cloneNode(true))
    if (mediasDOMArray[indexOfMedia].tagName == "VIDEO") {
        mediasDOMArray[indexOfMedia].setAttribute("autoplay", "");
        mediasDOMArray[indexOfMedia].setAttribute("controls", "");
    }
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
    const titleInLightBox = document.querySelector(".lightbox-container .media-title");
    const videos = document.querySelectorAll("video");

    videos.forEach(video => {
        video.removeAttribute("autoplay");
        video.removeAttribute("controls");
        video.pause();
        video.currentTime = 0;
    })

    backgroundLightbox.style.display = "none";
    lightboxContainer.removeChild(titleInLightBox);
    lightboxContainer.removeChild(mediaInLightBox);
    lightboxContainer.style.display = "none";   
}
