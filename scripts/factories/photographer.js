function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/Photographers_ID_Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const place = document.createElement("span");
        place.classList.add("place");
        place.textContent = `${city}, ${country}`;
        
        const taglineDOM= document.createElement("span");
        taglineDOM.classList.add("taglineDOM");
        taglineDOM.textContent = tagline;
        
        const priceDOM= document.createElement("span");
        priceDOM.classList.add("priceDOM");
        priceDOM.textContent = `${price}€/jour`;

        article.append(img, h2, place, taglineDOM, priceDOM);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}