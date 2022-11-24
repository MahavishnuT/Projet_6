function mediaFactory(data) {
    const { title, image, video, likes, date } = data;

    function imageOrVideo() {
        if (image) {
            const picture = `./assets/images/Sample_Photos/${image}`;
            return {picture : picture};
        }
        else {
            const film = `./assets/images/Sample_Photos/${video}`;
            return {film : film};
        }
    }

    const result = imageOrVideo();
    console.log("result :", result);

    const mediaCardDOM = getMediaCardDOM(title, result.picture, result.film, likes, date);

    const likesForEncart = getLikesForEncartDOM();

    return { result, mediaCardDOM, likesForEncart }
}



function createMediaInDOM(type, media, title) {
    const lightboxContainer = document.querySelector(".lightbox-container");

    const newMedia = document.createElement( type );
    newMedia.setAttribute("src", media)
    newMedia.setAttribute("alt", `Média nommé ${title}`)
    newMedia.setAttribute("tabindex", "0")
    newMedia.setAttribute("onclick", "openLightbox()")
    newMedia.addEventListener("click", () => {
        newMedia.classList.add("active");
        const currentMedia = document.querySelector(".active");
        lightboxContainer.appendChild(currentMedia.cloneNode(true));
    })
    if (type === "video") {
        newMedia.setAttribute("autoplay", "");
        newMedia.setAttribute("controls", "");
    }
    newMedia.classList.add("media")
    return (newMedia);
}

function imageOrVideo(image, video, title) {
    
    return image ? createMediaInDOM("img", image, title) : createMediaInDOM("video", video, title)
    
}

function getMediaCardDOM(title, image, video, likes, date) {
    
    
    const result = imageOrVideo(image, video, title);
    
    const h2 = document.createElement( 'h2' );
    h2.textContent = title;
    
    const likesNumber = document.createElement("span");
    likesNumber.classList.add("likes");
    likesNumber.innerText = parseInt(likes, 10);
    
    const heartShapeButton = document.createElement("button");
    heartShapeButton.setAttribute("title", `Mettre un like au post ${title}?`);
    heartShapeButton.setAttribute("tabindex", "0");
    heartShapeButton.setAttribute("aria-pressed", "false");
    heartShapeButton.setAttribute("aria-label", `Bouton pour liker la publication nommée ${title}`); 
    heartShapeButton.addEventListener("click", e => {
        const likeClicked = e.target;
        let likesNumberDOM = likeClicked.previousElementSibling;
        const sumLikesDOM = document.querySelector(".sum-likes");
        
        likesNumberDOM.innerText++
        sumLikesDOM.innerText++;
        
        likeClicked.disabled = true;
    })
    const heartShape = document.createElement("i");
    heartShape.classList.add("fa-solid", "fa-heart");
    heartShapeButton.append(heartShape);
    
    const article = document.createElement( 'article' );
    article.setAttribute("date", (new Date(date)).getTime());
    article.append(result, h2, likesNumber, heartShapeButton);
    
    return (article);
}

function getLikesForEncartDOM() {

    const allLikes = document.querySelectorAll(".likes");
    const allLikesArray = Array.from(allLikes).map(x => parseInt(x.innerText, 10));

    const sumLikesDOM = document.createElement("span");
    sumLikesDOM.innerText = allLikesArray.reduce((a, b) => a + b, 0);
    sumLikesDOM.setAttribute("tabindex", "0");
    sumLikesDOM.setAttribute("aria-label", `Le photographe accumule ${sumLikesDOM.innerText} likes`);
    sumLikesDOM.classList.add("sum-likes");

    return (sumLikesDOM);
}