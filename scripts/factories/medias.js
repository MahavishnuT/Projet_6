function mediaFactory(data) {
    const { title, image, video, likes } = data;

    function imageOrVideo() {
        if (image) {
            const picture = `assets/images/Sample_Photos/${image}`;
            return {picture : picture};
        }
        else {
            const film = `assets/images/Sample_Photos/${video}`;
            return {film : film};
        }
    }

    const result = imageOrVideo();
    console.log("result :", result);

    const mediaCardDOM = getMediaCardDOM(title, result.picture, result.film, likes);


    return { result, mediaCardDOM }
}



function createMediaInDOM(type, media) {
    const lightboxContainer = document.querySelector(".lightbox-container");

    const newMedia = document.createElement( type );
    newMedia.setAttribute("src", media)
    newMedia.setAttribute("onclick", "openLightbox()")
    newMedia.addEventListener("click", e => {
        newMedia.classList.add("active");
        const currentMedia = document.querySelector(".active");
        lightboxContainer.appendChild(currentMedia.cloneNode(true));
        console.log("e.target", e.target);
    })
    if (type === "video") {
        newMedia.setAttribute("autoplay", "");
        newMedia.setAttribute("controls", "");
    }
    newMedia.classList.add("media")
    return (newMedia);
}

function getMediaCardDOM(title, image, video, likes) {
    const article = document.createElement( 'article' );

    function imageOrVideo() {

        return image ? createMediaInDOM("img", image) : createMediaInDOM("video", video) 

    }

    const result = imageOrVideo();

    const h2 = document.createElement( 'h2' );
    h2.textContent = title;

    const likesNumber = document.createElement("span");
    likesNumber.textContent = likes;

    const heartShape = document.createElement("i");
    heartShape.classList.add("fa-solid");
    heartShape.classList.add("fa-heart");

    article.append(result, h2, likesNumber, heartShape);

    return (article);
}