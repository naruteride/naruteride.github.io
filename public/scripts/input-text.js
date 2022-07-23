let cardTemplateInDiv = document.createElement("div");

function fetchInputTextCover() {
	return fetch("/views/input-text.html")
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