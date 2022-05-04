let cardList;

onload = () => {
    cardList = document.querySelector("#card-list");
    fetchCard();
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