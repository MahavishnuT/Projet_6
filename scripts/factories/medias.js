function mediaFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;

    const picture = `assets/images/Sample_Photos/${image}`;
    const film = `assets/images/Sample_Photos/${video}`;

    const mediaCardDOM = getMediaCardDOM(title, image, video, likes);

    return { picture, film, mediaCardDOM }
}

function getMediaCardDOM(title, image, video, likes) {
    const article = document.createElement( 'article' );

    const img = document.createElement( 'img' );
    img.setAttribute("src", image)

    const film = document.createElement("video");
    film.setAttribute("src", video)

    const h2 = document.createElement( 'h2' );
    h2.textContent = title;

    const likesNumber = document.createElement("span");
    likesNumber.textContent = likes;

    article.append(title, image, video, likes);

    return (article);
}