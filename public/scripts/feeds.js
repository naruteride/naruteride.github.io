let player, cardList;
let cards;
let cardTemplateInDiv = document.createElement("div");
let tagTemplateInDiv = document.createElement("div");
let offset = 0, count = 10;

fetchCard();
fetchTag();

onload = () => {
	cardList = document.querySelector("#card-list");
	player = document.querySelector("#spotify-player");
	fetchDiggingLogSearch();

	let scrollElement = document.querySelector("#feeds");
	scrollElement.addEventListener("scroll", () => {
		if (scrollElement.offsetHeight + scrollElement.scrollTop >= scrollElement.scrollHeight) {
			fetchDiggingLogSearch();
		}
	})
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

// 서버로부터 데이터를 가져온 뒤, 카드를 나열하는 함수를 호출함.
function fetchDiggingLogSearch() {
	let resStatus = 0;

	fetch("https://server.mugip.com/digging_log/search", {
		method: "POST",
		mode: "cors",
		body: JSON.stringify({
			"filter_expr": {},
			"sort_by_key": "created",
			"sort_by_order": "asc",
			"offset": offset,
			"count": count
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
			Authorization: "Bearer " + window.localStorage.getItem("access_token")
		},
	})
		.then(response => {
			offset += count;
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
					cards = cardList.querySelectorAll(".card");
					break;
				case 403:
					console.log("피드 가져오기 실패(로그인 안됨): " + JSON.stringify(response));
					window.location.href = "/views/logins/login";
				default:
					console.log("피드 가져오기 실패: " + JSON.stringify(response));
					console.log("unhandled");
					break;
			}
		})
		.catch((err) => {
			console.error("DiggingLogSearch fetch error: " + err);
			window.location.href = "/views/logins/login";
		})
}

// 매개변수로 받은 데이터와 함께 카드 엘리먼트를 나열함.
let tags;
function arrangeCards(data) {
	let cardElementInDiv = cardTemplateInDiv.cloneNode(true);

	if (data.user.last_profile_image_url) {
		cardElementInDiv.querySelector(".profile-image").src = data.user.last_profile_image_url;
	}
	cardElementInDiv.querySelector(".writer").innerText = data.user.nickname;
	cardElementInDiv.querySelector(".album-image").style.backgroundImage = "url(" + data.track.album.images[1].url + ")";
	cardElementInDiv.querySelector(".album-image").addEventListener("click", e => {
		player.src = "https://open.spotify.com/embed/track/" + data.track.id + "?utm_source=generator";
		player.classList.add("on");
		for (let card of cards) {
			card.classList.remove("active");
		}
		e.target.parentElement.classList.add("active");
	});
	cardElementInDiv.querySelector(".song-name").textContent = data.track.name;
	cardElementInDiv.querySelector(".artist").textContent = data.track.artists[0].name;
	tags = cardElementInDiv.querySelector(".tags");
	for (tag of data.tags) {
		let tagElementInDiv = tagTemplateInDiv.cloneNode(true);

		tagElementInDiv.querySelector(".icon").textContent = tag.icon;
		tagElementInDiv.querySelector(".name").textContent = tag.name;

		tags.append(tagElementInDiv.firstChild);
	}

	cardList.append(cardElementInDiv.firstChild);
}
