let cardList;

onload = () => {
    cardList = document.querySelector("#card-list");
    console.log(cardList);
    fetchCard();

    document.querySelector(".digging").addEventListener("click", () => {
        alert("digging");
    })
}

function fetchCard() {
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