const dropdown = document.querySelector(".dropdown");
const select = dropdown.querySelector(".select");
const caret = dropdown.querySelector(".caret");
const menu = dropdown.querySelector(".menu");
const options = dropdown.querySelectorAll(".menu li");
const selected = dropdown.querySelector(".selected");
const mediasContainer = document.querySelector(".medias-container");
const activeMenu = document.querySelector(".active-menu")

select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    select.setAttribute("aria-expanded", "true");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
})

options.forEach(option => {
    option.addEventListener("click", (e) => {
        sortMedias(e);
        selected.innerText = option.innerText;
        select.classList.remove("select-clicked");
        caret.classList.remove("caret-rotate");
        menu.classList.remove("menu-open");

        options.forEach(option => {
            option.classList.remove("active-menu");
        });

        option.classList.add("active-menu");

    });
});

function compareNumbers(a, b) {
    return b - a;
}

function sortMedias(e) {
    const allLikes = document.querySelectorAll(".medias-container article .likes");
    const allLikesArray = Array.from(allLikes).map(x => parseInt(x.innerText, 10));
    const titles = document.querySelectorAll("article h2");
    const titlesArray = Array.from(titles).map(x => x.innerText);
    const articles = document.querySelectorAll(".medias-container article");
    const datesArray = Array.from(articles).map(x => parseInt(x.getAttribute("date"), 10));

    if (e.target.innerText === "Popularité") {
        allLikesArraySorted = allLikesArray.sort(compareNumbers);
        
        for (let i of allLikesArraySorted) {
            allLikes.forEach(j => {
                if (parseInt(j.innerText, 10) === i) {
                    mediasContainer.appendChild(j.parentNode);
                }
            })
        }
    }

    else if (e.target.innerText === "Titre") {
        titlesArraySorted = titlesArray.sort();

        for (let i of titlesArraySorted) {
            titles.forEach(j => {
                if (j.innerText === i) {
                    mediasContainer.appendChild(j.parentNode);
                }
            })
        }
    }

    else if (e.target.innerText === "Date") {
        datesArraySorted = datesArray.sort(compareNumbers);

        for (let i of datesArraySorted) {
            articles.forEach(j => {
                if (parseInt(j.getAttribute("date")) === i) {
                    mediasContainer.appendChild(j);
                }
            })
        }
    }
}

