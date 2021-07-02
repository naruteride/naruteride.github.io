let map;
let myLatLng = { lat: 37.5575312, lng: 126.9222782 }

let funckingMarker = new google.maps.Marker({
  position: { lat: 37.5575314, lng: 126.9222784 },
  title:"fuuuuuuuuuuuncccccccccking Marker!!"
});

function initMap() {

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.5575312, lng: 126.9222782 },
    zoom: 17,
    disableDefaultUI: true,
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
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
      // 크롬일 경우에만 아래 코드를 통해, 바텀드로워 버그 해결
      if (!!window.chrome) {
        let drawerSection1 = bottomDrawer.querySelector("section:nth-child(1)");
        let drawerSection2 = bottomDrawer.querySelector("section:nth-child(2)");

        // 터치 할 때 .pointer-events-auto가 추가되고 땔 때 지워짐.
        // 섹션 1
        drawerSection1.addEventListener("touchstart", function () {
          bottomDrawer.classList.add("pointer-events-auto");
          console.log("touch start");
        });
        drawerSection1.addEventListener("touchend", function () {
          setTimeout(() => {
            bottomDrawer.classList.remove("pointer-events-auto");
            console.log("touch end");

            funckingMarker.setMap(map);
            
          }, 500);
        });
        // 섹션 2
        drawerSection2.addEventListener("touchstart", function () {
          bottomDrawer.classList.add("pointer-events-auto");
          console.log("touch start");
        });
        drawerSection2.addEventListener("touchend", function () {
          setTimeout(() => {
            bottomDrawer.classList.remove("pointer-events-auto");
            console.log("touch end");
          }, 500);
        });
      }
    })
    .catch(function (err) {
      console.warn("Bottom drawer fetch went wrong.", err);
    });
};
