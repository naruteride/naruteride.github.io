let spotifyButton;
onload = () => {
    spotifyButton = document.querySelector("#spotify-login");
    spotifyButton.addEventListener("click", () => {
        location.href = "https://accounts.spotify.com/authorize?response_type=code&client_id=3df833a583c149188b0c193c67b9731b&scope=user-read-private%20user-read-email&redirect_uri=https://naruteride.github.io/views/&state=" + generateRandomString(16);
    })
}