onload = () => {
	document.querySelector(".to-back-button").addEventListener("click", () => {
		history.back();
	})
}

function previewBackgroundFile() {
	let preview = document.querySelector("#profile-images-section");
	let file = document.querySelector("#background-image-upload").files[0];
	let reader = new FileReader();

	reader.onloadend = function () {
		preview.style.backgroundImage = "url(" + reader.result + ")";
	}

	if (file) {
		reader.readAsDataURL(file);
	} else {
		preview.style.backgroundImage = "";
	}
}

function previewCircleFile() {
	let preview = document.querySelector("#circle-image");
	let file = document.querySelector("#circle-image-upload").files[0];
	let reader = new FileReader();

	reader.onloadend = function () {
		preview.style.backgroundImage = "url(" + reader.result + ")";
	}

	if (file) {
		reader.readAsDataURL(file);
	} else {
		preview.style.backgroundImage = "";
	}
}

function fetchName() {
	fetch("http://ec2-3-37-203-162.ap-northeast-2.compute.amazonaws.com:5468/...", {
		method: "POST",
		mode: "cors",
		body: JSON.stringify({
			
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	})
		.then(response => {
			resStatus = response.status;
			return response.json();
		})
		.then(response => {
			switch (resStatus) {
				case 200:
					JSON.stringify(response);

					window.localStorage.getItem("access_token");

					// window.localStorage.setItem("access_token", response.access_token);
					// window.localStorage.setItem("refresh_token", response.refresh_token);
					// window.localStorage.setItem("social_access_token", response.social_access_token);
					// window.localStorage.setItem("social_refresh_token", response.social_refresh_token);
					break;
				default:
					console.log("unhandled");
					break;
			}
		})
		.catch((err) => {
			console.error("login fetch error: " + err);
		})
}