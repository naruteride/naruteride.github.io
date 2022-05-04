let cardList;
let searchInput, searchIcon;
let searchOptionTag, searchOptionUser, searchOptionSong;

onload = () => {
    cardList = document.querySelector("#card-list");
    fetchCard();

	// 검색 바
    searchInput = document.querySelector("#search-bar>input[type=search]");
    searchIcon = document.querySelector("#search-bar>button>img");
    searchInput.addEventListener("focus", (event) => {
        searchIcon.classList.remove("off");
    });
    searchInput.addEventListener("blur", (event) => {
        searchIcon.classList.add("off");
    });

	// 검색 옵션 버튼들
	searchOptionTag = document.querySelector("#search-option>button.tag");
	searchOptionUser = document.querySelector("#search-option>button.user");
	searchOptionSong = document.querySelector("#search-option>button.song");
	searchOptionTag.addEventListener("click", (event) => {
		searchOptionTag.classList.add("on");
		searchOptionUser.classList.remove("on");
		searchOptionSong.classList.remove("on");
	});
	searchOptionUser.addEventListener("click", (event) => {
		searchOptionTag.classList.remove("on");
		searchOptionUser.classList.add("on");
		searchOptionSong.classList.remove("on");
	});
	searchOptionSong.addEventListener("click", (event) => {
		searchOptionTag.classList.remove("on");
		searchOptionUser.classList.remove("on");
		searchOptionSong.classList.add("on");
	});
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