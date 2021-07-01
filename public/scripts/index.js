// import "./bottom-drawer.js";

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.5575312, lng: 126.9222782 },
    zoom: 17,
    disableDefaultUI: true,
  });
}

onload = function () {
  let bottomDrawer = document.querySelector("#bottom-drawer");

  // 바텀 드로워 fetch
  fetch("./bottom-drawer.html")
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      bottomDrawer.innerHTML = html;
    })
    .then(function () {
      let drawerSection1 = bottomDrawer.querySelector("section:nth-child(1)");
      let drawerSection2 = bottomDrawer.querySelector("section:nth-child(2)");

      drawerSection1.addEventListener("click", function () {
        alert("섹션 1에 터치를 함");
      });
      console.log("코드 합치기 성공");
    })
    .catch(function (err) {
      console.warn("Bottom drawer fetch went wrong.", err);
    });
};
