let map;
let myLatLng = { lat: 37.5575312, lng: 126.9222782 };
let funckingMarkerPosition = { lat: 37.5574111, lng: 126.9245447 };

let isMouseUp = 0;

function initMap() {
  // 기본 맵 위치 옵션
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.5575312, lng: 126.9222782 },
    zoom: 17,
    disableDefaultUI: true,
  });
  // 기본 마커
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });

  db.collection("posts")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        addMarker(
          { lat: doc.data().lat, lng: doc.data().lng },
          "게시글들 중 하나"
        );
      });
    });

  // 맵 홀드 시 발생하는 이벤트
  map.addListener("mousedown", (mapsMouseEvent) => {
    isMouseUp = setTimeout(() => {
      window.writeLatLng = mapsMouseEvent.latLng;
      addMarker(window.writeLatLng, "글쓰기 마커 타이틀");
      location.hash = "write";
    }, 1000);
  });
  map.addListener("mouseup", () => {
    clearTimeout(isMouseUp);
  });
  map.addListener("dragstart", () => {
    clearTimeout(isMouseUp);
  });
}

function addMarker(markerPosition, title) {
  new google.maps.Marker({
    position: markerPosition,
    map,
    title: this.title,
  });
}
