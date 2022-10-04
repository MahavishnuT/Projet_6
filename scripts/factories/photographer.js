function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/Photographers_ID_Photos/${portrait}`;

    const userCardDOM = getUserCardDOM(name, picture, city, country, tagline, price, id);

    return { name, picture, userCardDOM, id }
}

// Séparation des fonctions, éviter de mettre une fonction dans une fonction

function getUserCardDOM(name, picture, city, country, tagline, price, id) {
    const article = document.createElement( 'article' );

    let params = new URLSearchParams(id).toString();
    console.log("params: ", params)
    console.log("id: ", id)

    const link = document.createElement("a");
    link.setAttribute("href", `./photographer.html/?id=${params}`)
    link.setAttribute("aria-label", `${name}`)

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

    link.append(img, h2);
    article.append(link, place, taglineDOM, priceDOM);

    return (article);
}