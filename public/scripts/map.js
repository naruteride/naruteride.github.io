let map;
let myLatLng = { lat: 37.5575312, lng: 126.9222782 };
let funckingMarkerPosition = { lat: 37.5574111, lng: 126.9245447 };

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

  infoWindow.open(map);
  // Configure the click listener.
  map.addListener("click", (mapsMouseEvent) => {
    // Close the current InfoWindow.
    infoWindow.close();
    // Create a new InfoWindow.
    infoWindow = new google.maps.InfoWindow({
      position: mapsMouseEvent.latLng,
    });
    infoWindow.setContent(
      JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
    );
    infoWindow.open(map);
  });
}

function addMarker(markerPosition, title) {
  new google.maps.Marker({
    position: markerPosition,
    map,
    title: this.title,
  });
}
