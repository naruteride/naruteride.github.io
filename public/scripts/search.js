let cardList;
let searchInput, searchIcon;
let searchOptionTag, searchOptionUser, searchOptionSong;

onload = () => {
    cardList = document.querySelector("#card-list");
    // fetchCard();
	// fetchUserCard();

	// 뒤로가기 버튼
	document.querySelector(".to-back-button").addEventListener("click", () => {
		history.back();
	})

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
	searchOptionTag = document.querySelector("#search-options>button.tag");
	searchOptionUser = document.querySelector("#search-options>button.user");
	searchOptionSong = document.querySelector("#search-options>button.song");
	searchOptionTag.addEventListener("click", (event) => {
		clearCardList();
		searchOptionTag.classList.add("on");
		searchOptionUser.classList.remove("on");
		searchOptionSong.classList.remove("on");
		fetchCard();
	});
	searchOptionUser.addEventListener("click", (event) => {
		clearCardList();
		searchOptionTag.classList.remove("on");
		searchOptionUser.classList.add("on");
		searchOptionSong.classList.remove("on");
		fetchUserCard();
	});
	searchOptionSong.addEventListener("click", (event) => {
		clearCardList();
		searchOptionTag.classList.remove("on");
		searchOptionUser.classList.remove("on");
		searchOptionSong.classList.add("on");
	});
}

// 이 파일 내의 fetchXXXCard() 함수들을 다 지우고 card.js 파일의 함수들을 사용해야 함.
// 따라서 cards.js의 함수를 import 해와야 함.
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

function fetchUserCard() {
    return fetch("/views/user-card.html")
        .then((response) => {
            return response.text();
        })
        .then((html) => {
            for (let i = 0; i < 5; i++) {
                cardList.insertAdjacentHTML("beforeend", html);
            }
        })
        .catch((err) => {
            console.error("Card list fetch went wrong.", err);
        })
}

function clearCardList() {
	cardList.innerHTML = "";
}