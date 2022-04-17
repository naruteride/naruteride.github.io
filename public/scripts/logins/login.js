let spotifyButton;
let spotifyButton2 = document.querySelector("#spotify2");


onload = () => {
    alert("온로드 실행됨");
    spotifyButton = document.querySelector("#spotify");
    spotifyButton.addEventListener("click", () => {
        alert("버튼 눌림");
    })
}

spotifyButton2.addEventListener("click", () => {
    alert("버튼 눌림2");
})