function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;
    console.log("data",data)
    const picture = `./assets/photographers/Photographers_ID_Photos/${portrait}`;

    const userCardDOM = getUserCardDOM(name, picture, city, country, tagline, price, id);

    const photographerPresentation = getPhotographerPresentation(name, picture, city, country, tagline);

    const priceForEncart = getPriceForEncartDOM(price);

    return { name, picture, userCardDOM, photographerPresentation, id, priceForEncart }
}


function getUserCardDOM(name, picture, city, country, tagline, price, id) {
    const article = document.createElement( 'article' );
    article.setAttribute("role", "region");

    const link = document.createElement("a");
    link.setAttribute("href", `./photographer.html?id=${id}`)
    link.setAttribute("aria-label", `Visiter le profil de ${name}?`)
    link.setAttribute("target", "blank")
    link.setAttribute("role", "link")

    const img = document.createElement( 'img' );
    img.setAttribute("src", picture)
    img.setAttribute("alt", `Photo de profil de ${name}`)

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

function getPhotographerPresentation(name, picture, city, country, tagline) {
    const article = document.createElement( 'article' );

    const photographHeaderText = document.createElement("div");
    photographHeaderText.classList.add("photograph-header-text");

    const h1 = document.createElement( 'h1' );
    h1.textContent = name;
    
    const place = document.createElement("span");
    place.classList.add("place");
    place.textContent = `${city}, ${country}`;
    
    const taglineDOM= document.createElement("span");
    taglineDOM.classList.add("taglineDOM");
    taglineDOM.textContent = tagline;
    
    const img = document.createElement( 'img' );
    img.setAttribute("src", picture)

    photographHeaderText.append(h1, place, taglineDOM)
    article.append(photographHeaderText, img);

    return (article);
}

function getPriceForEncartDOM(price) {
    const pricePerDay = document.createElement("span");
    pricePerDay.classList.add("price-per-day");
    pricePerDay.innerText = `${price}€ / jour`;
    pricePerDay.setAttribute("aria-label", `Le tarif du photographe est de ${price} euros par jour`);
    pricePerDay.setAttribute("tabindex", "0");
    
    return(pricePerDay);
}

