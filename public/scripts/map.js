let map;
let myLatLng = { lat: 35.116595, lng: 129.0414111 };
let funckingMarkerPosition = { lat: 37.5574111, lng: 126.9245447 };

let isMouseUp = 0;

function initMap() {
  // 기본 맵 위치 옵션
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 35.116595, lng: 129.0414111 },
    zoom: 14,
    disableDefaultUI: true,
  });

  // db에서 게시글 데이터 가져옴
  db.collection("posts")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let data = doc.data();

        addMarker(
          { lat: data.lat, lng: data.lng }, // 마커 위치
          "게시글들 중 하나", // 곡 제목
          doc.id,
          data.thumbnail // 엘범 커버 혹은 썸네일 주소 문자열
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

function addMarker(markerPosition, title, docID, image) {
  new google.maps.Marker({
    position: markerPosition,
    map,
    title: title,
    postID: docID,
    icon: image,
  }).addListener("click", () => { // 마커 클릭 시 발생
    console.log(title + ", " + docID);
    location.hash = "post:" + docID;
  });
}
