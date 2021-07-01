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

      drawerSection1.addEventListener("touchstart", function () {
        bottomDrawer.classList.add("pointer-events-auto");
        console.log("섹션 1이 터치됨");
      });
      drawerSection1.addEventListener("touchend", function () {
        bottomDrawer.classList.remove("pointer-events-auto");
        console.log("섹션 1이 떨어짐");
      });
    })
    .catch(function (err) {
      console.warn("Bottom drawer fetch went wrong.", err);
    });
};
