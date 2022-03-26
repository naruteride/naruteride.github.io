let cardList = document.querySelector("#card-list");

cardFetch();

function cardFetch() {
    return fetch("../card.html")
    .then((response) => {
        return response.text();
    })
    .then((html) => {
        cardList.innerHTML = html;
    })
    .catch((err) => {
        console.warn("Card list fetch went wrong.", err);
    })
}