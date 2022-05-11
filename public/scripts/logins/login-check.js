const urlStr = window.location.href;
const url = new URL(urlStr);

if (location.hash == "#signup") {
	fetchSignup();
} else {
	fetchLogin();
}

onload = () => {
	document.querySelector("#signup-link").addEventListener("click", () => {
		let state = Math.floor(Math.random() * Math.pow(10, 16)).toString();
		while (state.length < 16) {
			state = '0' + state;
		}
		location.href = "https://accounts.spotify.com/authorize?response_type=code&client_id=965724cc721a4fa3b21ec344ae31bf12&scope=user-read-private%20user-read-email&redirect_uri=http://localhost:3000/views/logins/login-check&state=" + state + "#signup";
	})
}

function fetchLogin() {
	let resStatus = 0;

	fetch("http://ec2-3-37-203-162.ap-northeast-2.compute.amazonaws.com:5468/auth/login/social", {
		method: "POST",
		mode: "cors",
		body: JSON.stringify({
			code: url.searchParams.get("code"),
			redirect_uri: "http://localhost:3000/views/logins/login-check",
			provider_type: 0,
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	})
		.then((response) => {
			resStatus = response.status;
			return response.json();
		})
		.then(response => {
			switch (resStatus) {
				case 200:
					alert("로그인 성공: " + JSON.stringify(response));
					// location.hash = "/views/feeds";
					break;
				case 409:
					if (response.detail.code == "not_found_user") {
						alert("회원가입을 먼저 진행해주세요!");
					} else {
						console.log("로그인 실패: " + JSON.stringify(response));
						alert("상태 코드는 409이나, detail.code의 값이 \"not_found_user\"가 아님.");
					}
					break;
				case 500:
					console.log("로그인 실패: " + JSON.stringify(response));
					console.log("server error, try again");
					break;
				default:
					console.log("로그인 실패: " + JSON.stringify(response));
					console.log("unhandled");
					break;
			}
		})
		.catch((err) => {
			console.error("login fetch error: " + err);
		})
}

function fetchSignup() {
	let resStatus = 0;

	fetch("http://ec2-3-37-203-162.ap-northeast-2.compute.amazonaws.com:5468/auth/signup/social", {
		method: "POST",
		mode: "cors",
		body: JSON.stringify({
			code: url.searchParams.get("code"),
			redirect_uri: "http://localhost:3000/views/logins/login-check",
			provider_type: 0,
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	})
		.then((response) => {
			resStatus = response.status;
			return response.json();
		})
		.then(response => {
			switch (resStatus) {
				case 200:
					console.log("회원가입 성공: " + JSON.stringify(response));
					// location.hash = "/views/feeds";
					break;
				case 409:
					if (response.detail.code == "already_exist_uid") {
						console.log("이미 가입한 계정입니다.");
						alert("이미 가입한 계정입니다.");
					} else {
						console.log("회원가입 실패: " + JSON.stringify(response));
						alert("상태 코드는 409이나, detail.code의 값이 \"already_exist_uid\"가 아님.");
					}
					break;
				case 500:
					console.log("회원가입 실패: " + JSON.stringify(response));
					console.log("server error, try again");
					break;
				default:
					console.log("회원가입 실패: " + JSON.stringify(response));
					console.log("unhandled");
					break;
			}
		})
		.catch((err) => {
			console.error("signup fetch error: " + err);
		})
}