let spotifyButton;

onload = () => {
    alert("온로드 실행됨");
    spotifyButton = document.querySelector("#spotify");
}

spotifyButton.addEventListener("click", () => {
    alert("버튼 눌림");
})