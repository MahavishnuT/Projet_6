async function getPhotographerId() {
    let params = (new URL(document.location)).searchParams;
    let id = params.get("id");
    console.log(id);

    return (id);
}

async function getPhotographer() {
    const dataPhotographers = await fetch("/data/photographers.json")
    const photographerId = await getPhotographerId();

    if (dataPhotographers) {
        const data = await dataPhotographers.json()
        console.log(data);
        
        // filtre le JSON pour retrouver l'id du photographe affiché dans l'URL
        const result = await data.photographers.filter(d => d["id"] == photographerId);
        console.log("result: ", result);

        return (result);
    }
    else {
        return console.log("an error occured")
    }
}

async function displayData(photographer) {
    const photographerPresentation = document.querySelector(".photographer-presentation");

    const photographerModel = new photographerFactory(photographer);
    photographerPresentation.appendChild(photographerModel.photographerPresentation);

}

async function init() {
    const photographer = await getPhotographer();
    console.log("photographer", photographer);
    displayData(photographer);
}

init();