const dropdown = document.querySelector(".dropdown");
const select = dropdown.querySelector(".select");
const caret = dropdown.querySelector(".caret");
const menu = dropdown.querySelector(".menu");
const options = dropdown.querySelectorAll(".menu li");
const selected = dropdown.querySelector(".selected");
const mediasContainer = document.querySelector(".medias-container");

select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
    sortMedias();
})

options.forEach(option => {
    option.addEventListener("click", () => {
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

function compareNumberOfLikes(a, b) {
    return b - a;
}

function sortMedias() {
    const allLikes = document.querySelectorAll(".medias-container article .likes")
    const allLikesArray = Array.from(allLikes).map(x => parseInt(x.innerText, 10));

    if (selected.innerText === "Popularité") {
        allLikesArraySorted = allLikesArray.sort(compareNumberOfLikes);
        
        for (let i of allLikesArraySorted) {
            allLikes.forEach(j => {
                if (parseInt(j.innerText, 10) === i) {
                    mediasContainer.appendChild(j.parentNode);
                }
            })
        }
    }
}
