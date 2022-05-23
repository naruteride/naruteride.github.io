onload = () => {
    snackbar = document.querySelector("#snackbar");
}

// 스낵바 함수
window.snackbar;
window.onSnackbar = message => {
    snackbar.innerText = message;
	snackbar.classList.add("show");

	setTimeout(() => {
		snackbar.classList.remove("show");
	}, 3000);
}