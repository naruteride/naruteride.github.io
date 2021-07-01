let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.5575312, lng: 126.9222782 },
    zoom: 17,
    disableDefaultUI: true,
  });
}

onload = function() {

  let bottomDrawer = document.querySelector("#bottom-drawer");

  // 바텀 드로워 fetch
  fetch('./bottom-drawer.html').then(function (response) {
    return response.text();
  }).then(function (html) {
    bottomDrawer.innerHTML = html
  }).catch(function (err) {
    console.warn('Bottom drawer fetch went wrong.', err);
  });


}