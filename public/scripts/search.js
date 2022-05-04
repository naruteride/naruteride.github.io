let cardList;
let searchInput, searchIcon;

onload = () => {
    cardList = document.querySelector("#card-list");
    fetchCard();

    searchInput = document.querySelector("#search-bar>input[type=search]");
    searchIcon = document.querySelector("#search-icon>button>img");
    searchInput.addEventListener("focus", (event) => {
        searchIcon.classList.remove("off");
    }, true);
    searchInput.addEventListener("blur", (event) => {
        searchIcon.classList.add("off");
    }, true);
}

function fetchCard() {
    return fetch("/views/card.html")
        .then((response) => {
            return response.text();
        })
        .then((html) => {
            for (let i = 0; i < 5; i++) {
                cardList.insertAdjacentHTML("beforeend", html);
            }
            document.querySelector(".digging").addEventListener("click", () => {
                // alert("digging");
            })
        })
        .catch((err) => {
            console.error("Card list fetch went wrong.", err);
        })
}