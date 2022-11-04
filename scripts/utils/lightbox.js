const lightboxContainer = document.querySelector(".lightbox-container");
const backgroundLightbox = document.querySelector(".background-lightbox");
const suivant = document.querySelector(".right");
const precedent = document.querySelector(".left");

// async function displayMediaInLightbox() {
//     await displayDataMedias();
//     const mediasDOM = document.querySelectorAll(".medias-container .media");
//     mediasDOM.forEach(media => {

//         media.addEventListener("click", e => {
//             media.classList.add("active");
//             const currentMedia = document.querySelector(".active");
//             lightboxContainer.appendChild(currentMedia.cloneNode(true));
//             console.log("e.target", e.target);
//         })

//     })

// }

// displayMediaInLightbox();

/**
 * 
 * @param {*} e 
 */
function slideSuivante(e) {
    
    const mediasDOM = document.querySelectorAll(".medias-container .media");
    console.log("mediasDOM: ", mediasDOM);
    const mediasDOMArray = Array.prototype.slice.call(mediasDOM);
    console.log("mediasDOMArray: ", mediasDOMArray);
    const currentMedia = document.querySelector(".active");
    console.log("currentMedia: ", currentMedia)
    const nbSlides = mediasDOM.length;
    console.log("nbSlides: ", nbSlides);
    let indexOfMedia = mediasDOMArray.indexOf(currentMedia);
    console.log("indexOfMedia: ", indexOfMedia);
    
    mediasDOMArray[indexOfMedia].classList.remove("active");
    lightboxContainer.removeChild(document.querySelector(".lightbox-container img"));

    if (indexOfMedia < nbSlides - 1) {
        indexOfMedia++;
    }
    else {
        indexOfMedia = 0;
    }

    mediasDOMArray[indexOfMedia].classList.add("active");
    lightboxContainer.appendChild(mediasDOMArray[indexOfMedia])
    console.log(mediasDOMArray[indexOfMedia])
}
suivant.addEventListener("click", (e) => {
    slideSuivante(e);
});

function slidePrecedente(e) {
    
    const mediasDOM = document.querySelectorAll(".medias-container .media");
    console.log("mediasDOM: ", mediasDOM);
    const mediasDOMArray = Array.prototype.slice.call(mediasDOM);
    console.log("mediasDOMArray: ", mediasDOMArray);
    const currentMedia = document.querySelector(".active");
    console.log("currentMedia: ", currentMedia)
    const nbSlides = mediasDOM.length;
    console.log("nbSlides: ", nbSlides);
    let indexOfMedia = mediasDOMArray.indexOf(currentMedia);
    console.log("indexOfMedia: ", indexOfMedia);
    
    mediasDOMArray[indexOfMedia].classList.remove("active");

    if (indexOfMedia > 0) {
        indexOfMedia--;
    }
    else {
        indexOfMedia = nbSlides - 1;
    }

    mediasDOMArray[indexOfMedia].classList.add("active");
}
precedent.addEventListener("click", (e) => {
    slidePrecedente(e);
});

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
