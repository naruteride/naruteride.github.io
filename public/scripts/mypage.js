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
			// for (let i = 0; i < 3; i++) {
			//     cardList.insertAdjacentHTML("beforeend", html);
			// }
			// document.querySelector(".digging").addEventListener("click", () => {
			//     // alert("digging");
			// })
		})
		.catch((err) => {
			console.error("Card list fetch went wrong.", err);
		})
}

window.onSpotifyIframeApiReady = (IFrameAPI) => {
	let element = document.getElementById('embed-iframe');
	let options = {
		uri: 'spotify:episode:7makk4oTQel546B0PZlDM5'
	};
	let callback = (EmbedController) => { };
	IFrameAPI.createController(element, options, callback);
};