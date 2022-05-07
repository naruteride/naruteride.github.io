let spotifyButton;
let state = Math.floor(Math.random() * Math.pow(10, 16)).toString();
while (state.length < 16) {
    state = '0' + state;
}
onload = () => {
    spotifyButton = document.querySelector("#spotify-login");
    spotifyButton.addEventListener("click", () => {
        location.href = "https://accounts.spotify.com/authorize?response_type=code&client_id=965724cc721a4fa3b21ec344ae31bf12&scope=user-read-private%20user-read-email&redirect_uri=https://naruteride.github.io/views/feeds.html&state=" + state;
    })
}