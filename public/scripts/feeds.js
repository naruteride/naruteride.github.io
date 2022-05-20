let cardList, player;
let cardTemplateInDiv = document.createElement("div");
let tagTemplateInDiv = document.createElement("div");

fetchCard();
fetchTag();

onload = () => {
	cardList = document.querySelector("#card-list");
	player = document.querySelector("#spotify-player");
	fetchDiggingLogSearch();
}

// 카드 HTML을 가져옴
function fetchCard() {
	return fetch("/views/card.html")
		.then(response => {
			return response.text();
		})
		.then(html => {
			cardTemplateInDiv.innerHTML = html;
		})
		.catch((err) => {
			console.error("Card list fetch went wrong.", err);
		})
}

// 태그 HTML을 가져옴
function fetchTag() {
	return fetch("/views/tag.html")
		.then(response => {
			return response.text();
		})
		.then(html => {
			tagTemplateInDiv.innerHTML = html;
		})
		.catch((err) => {
			console.error("Tag fetch went wrong.", err);
		})
}

// 실제 서버로부터 데이터를 가져온 뒤 cardList에 카드를 나열함
function fetchDiggingLogSearch() {
	let resStatus = 0;

	fetch("http://ec2-3-37-203-162.ap-northeast-2.compute.amazonaws.com:5468/digging_log/search", {
		method: "POST",
		mode: "cors",
		body: JSON.stringify({
			"filter_expr": {},
			"sort_by_key": "created",
			"sort_by_order": "asc",
			"offset": 0,
			"count": 20
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
			Authorization: "Bearer " + window.localStorage.getItem("access_token")
		},
	})
		.then(response => {
			resStatus = response.status;
			return response.json();
		})
		.then(response => {
			switch (resStatus) {
				case 200:
					console.log("피드 가져오기 성공: " + JSON.stringify(response));
					for (const data of response) {
						arrangeCards(data);
					}
					break;
				default:
					console.log("피드 가져오기 실패: " + JSON.stringify(response));
					console.log("unhandled");
					break;
			}
		})
		.catch((err) => {
			console.error("DiggingLogSearch fetch error: " + err);
		})
}

let tags;
function arrangeCards(data) {
	let cardElementInDiv = cardTemplateInDiv.cloneNode(true);
	
	cardElementInDiv.querySelector(".writer").innerText = data.user.nickname;
	cardElementInDiv.querySelector(".album-image").style.backgroundImage = "url(" + data.track.album.images[1].url + ")";
	cardElementInDiv.querySelector(".album-image").addEventListener("click", () => {
		player.src = "https://open.spotify.com/embed/track/" + data.track.id + "?utm_source=generator";
		player.classList.add("on");
	});
	cardElementInDiv.querySelector(".song-name").textContent = data.track.album.name;
	cardElementInDiv.querySelector(".artist").textContent = data.track.artists[0].name;
	tags = cardElementInDiv.querySelector(".tags");
	for (tag of data.tags) {
		let tagElementInDiv = tagTemplateInDiv.cloneNode(true);

		tagElementInDiv.querySelector(".icon").textContent = tag.icon;
		tagElementInDiv.querySelector(".name").textContent = tag.name;

		tags.prepend(tagElementInDiv.firstChild);
	}

	cardList.prepend(cardElementInDiv.firstChild);
	
}