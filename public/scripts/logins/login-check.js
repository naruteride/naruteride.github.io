const urlStr = window.location.href;
const url = new URL(urlStr);

fetch("http://ec2-3-37-203-162.ap-northeast-2.compute.amazonaws.com:5468/auth/signup/social", {
    method: "POST",
    body: {
        code: url.searchParams.get("code"),
        redirect_uri: "https://naruteride.github.io/views/logins/login-check.html",
        provider_type: 0,
    }
})
.then((response) => {
    response.json().then((resData) => {
        if (response.status == 200) {
            alert("성공");
        }
    });
});