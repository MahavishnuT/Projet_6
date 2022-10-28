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

function getMediaCardDOM(title, image, video, likes) {
    const article = document.createElement( 'article' );

    function imageOrVideo() {
        const lightboxContainer = document.querySelector(".lightbox-container");

        if (image) {
            const img = document.createElement( 'img' );
            img.setAttribute("src", image)
            img.setAttribute("onclick", "openLightbox()")
            img.addEventListener("click", function() {
                img.classList.add("active");
                lightboxContainer.appendChild(img)
            })
            img.classList.add("media")
            return (img);
        }
        else {
            const film = document.createElement("video");
            film.setAttribute("src", video)
            film.setAttribute("onclick", "openLightbox()")
            film.addEventListener("click", function() {
                film.classList.add("active");
                lightboxContainer.appendChild(film)
            })
            film.classList.add("media")
            return (film);
        }
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