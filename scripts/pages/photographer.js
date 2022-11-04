async function getPhotographerId() {
    let params = (new URL(document.location)).searchParams;
    let id = params.get("id");

    return (id);
}

async function getPhotographer() {
    const dataPhotographers = await fetch("../../data/photographers.json")
    const photographerId = await getPhotographerId();

    if (dataPhotographers) {
        const data = await dataPhotographers.json()
        
        // filtre le JSON pour retrouver l'id du photographe affiché dans l'URL
        const result = await data.photographers.filter(d => d["id"] == photographerId);

        //retourne le/la photographe
        return (result[0]);
    }
    else {
        console.log("an error occured")
        return 
    }
}

async function displayData(photographer) {
    const photographerPresentation = document.querySelector(".photograph-header");

    const photographerModel = new photographerFactory(photographer);
    photographerPresentation.appendChild(photographerModel.photographerPresentation);
}



async function getMedias() {
    const dataMedias = await fetch("../../data/photographers.json")
    const photographerId = await getPhotographerId();

    if (dataMedias) {
        const data = await dataMedias.json()
        
        // filtre le JSON pour retrouver l'id du photographe dans le media et compare avec celui affiché dans l'URL
        const result = await data.media.filter(d => d["photographerId"] == photographerId);

        // retourne les médias associés
        return (result);
    }
    else {
        console.log("an error occured")
        return 
    }
}

async function displayDataMedias(medias) {
    const mediasContainer = document.querySelector(".medias-container");

    medias.forEach((media) => {
        const mediaModel = new mediaFactory(media);
        mediasContainer.appendChild(mediaModel.mediaCardDOM);
    });
};

async function init() {
    const photographer = await getPhotographer();
    const medias = await getMedias();

    displayData(photographer);
    displayDataMedias(medias);
}

init();
