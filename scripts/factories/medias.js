function mediaFactory(data) {
    const { title, image, video, likes } = data;

    const picture = `assets/images/Sample_Photos/${image}`;
    const film = `assets/images/Sample_Photos/${video}`;

    const mediaCardDOM = getMediaCardDOM(title, image, video, likes);

    return { picture, film, mediaCardDOM }
}

function getMediaCardDOM(title, image, video, likes) {
    const article = document.createElement( 'article' );

    function imageOrVideo() {
        if (image) {
            const img = document.createElement( 'img' );
            img.setAttribute("src", image)
            return (img);
        }
        else {
            const film = document.createElement("video");
            film.setAttribute("src", video)
            return (film)
        }
    }

    const result = imageOrVideo();

    const h2 = document.createElement( 'h2' );
    h2.textContent = title;

    const likesNumber = document.createElement("span");
    likesNumber.textContent = likes;

    article.append(result, h2, likesNumber);

    return (article);
}