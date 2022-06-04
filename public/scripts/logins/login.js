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
		// window.onSnackbar("스포티파이 로그인 업데이트 예정");
		location.href = "https://accounts.spotify.com/authorize?response_type=code&client_id=965724cc721a4fa3b21ec344ae31bf12&scope=user-read-private%20user-read-email&redirect_uri=" + window.location.protocol + "//" + window.location.host + "/views/logins/login-check&state=" + state;
	});
}