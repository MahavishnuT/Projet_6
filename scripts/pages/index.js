    async function getPhotographers() {
        const dataPhotographers = await fetch("./data/photographers.json")

        if (dataPhotographers) {
            const data = await dataPhotographers.json()
            console.log(data)
            return data;
        }
        else {
            return console.log("an error occured")
        }
    }


    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = new photographerFactory(photographer);
            console.log("photographerModel",photographerModel);
            photographersSection.appendChild(photographerModel.userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        console.log(photographers)
        displayData(photographers);
    };
    
    init();