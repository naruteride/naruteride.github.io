let map;
let myLatLng = { lat: 37.5575312, lng: 126.9222782 };
let funckingMarkerPosition = { lat: 37.5574111, lng: 126.9245447 };

let isMouseUp = 0;

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


  // Configure the click listener.
  map.addListener("mousedown", (mapsMouseEvent) => {
    isMouseUp = setTimeout(() => {
      alert("맵이 홀드됨");
    }, 1500)
  });

  map.addListener("mouseup", (mapsMouseEvent) => {
    clearTimeout(isMouseUp);
  })
}

function addMarker(markerPosition, title) {
  new google.maps.Marker({
    position: markerPosition,
    map,
    title: this.title,
  });
}
