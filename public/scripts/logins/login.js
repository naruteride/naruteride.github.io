let spotifyButton, guestButton;
let state = Math.floor(Math.random() * Math.pow(10, 16)).toString();
while (state.length < 16) {
	state = '0' + state;
}
onload = () => {
	guestButton = document.querySelector("#guest-login");
	guestButton.addEventListener("click", () => {
		location.href = "/views/logins/login-check#guest";
	});
	spotifyButton = document.querySelector("#spotify-login");
	spotifyButton.addEventListener("click", () => {
		onSnackbar("스포티파이 로그인은 아직 지원하지 않습니다!")
		// location.href = "https://accounts.spotify.com/authorize?response_type=code&client_id=965724cc721a4fa3b21ec344ae31bf12&scope=user-read-private%20user-read-email&redirect_uri=" + window.location.protocol + "//" + window.location.host + "/views/logins/login-check&state=" + state;
	});
	snackbar = document.querySelector("#snackbar");
}

// 스낵바 함수
let snackbar;
function onSnackbar(message) {
	snackbar.innerText = message;
	snackbar.classList.add("show");

	setTimeout(() => {
		snackbar.classList.remove("show");
	}, 3000);
}