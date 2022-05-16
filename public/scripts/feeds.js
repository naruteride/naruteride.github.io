let cardList;
let card;

onload = () => {
	cardList = document.querySelector("#card-list");
	fetchCard();
	fetchDiggingLogSearch();
}

function fetchCard() {
	fetch("/views/card.html")
		.then((response) => {
			card = response.text();
		})
		// .then((html) => {
		// 	for (let i = 0; i < 5; i++) {
		// 		cardList.insertAdjacentHTML("beforeend", html);
		// 	}
		// 	document.querySelector(".digging").addEventListener("click", () => {
		// 		console.log("digging");
		// 	})
		// })
		.catch((err) => {
			console.error("Card list fetch went wrong.", err);
		})
}

function fetchDiggingLogSearch() {
	let resStatus = 0;

	fetch("http://ec2-3-37-203-162.ap-northeast-2.compute.amazonaws.com:5468/digging_log/search", {
		method: "POST",
		mode: "cors",
		body: JSON.stringify({
			filter_expr: {},
			sort_by_key: "name",
			sort_by_order: "asc",
			offset: 0,
			count: 5
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