let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.5575312, lng: 126.9222782 },
    zoom: 17,
    disableDefaultUI: true,
  });
}

onload = function() {
  fetch('./test.html').then(function (response) {
    return response.text();
  }).then(function (html) {
    console.log(html);
  }).catch(function (err) {
    console.warn('Something went wrong.', err);
  });
}