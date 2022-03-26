let cardList = document.querySelector("#card-list");

console.log(cardList);

cardFetch();

function cardFetch() {
    return fetch("/views/card.html")
    .then((response) => {
        return response.text();
    })
    .then((html) => {
        cardList.innerHTML = html;
    })
    .catch((err) => {
        console.error("Card list fetch went wrong.", err);
    })
}