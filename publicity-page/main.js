onload = function () {
  let markerOnMap = document.querySelector("#marker-on-map");
  let markerOnMapLocation = markerOnMap.getBoundingClientRect();

  let friends = document.querySelector("#friends");
  let friendsLocation = friends.getBoundingClientRect();

  let lastSection = document.querySelector("#last-section");
  let lastSectionLocation = lastSection.getBoundingClientRect();

  let footer = document.querySelector("#footer");
  let footerLocation = footer.getBoundingClientRect();

  let scrollSnap = document.querySelector(".scroll-snap");
  scrollSnap.addEventListener("scroll", function (event) {
    if (scrollSnap.scrollTop >= markerOnMapLocation.top) {
      for (let li of markerOnMap.querySelectorAll("ol>li")) {
        li.classList.add("animation-on");
      }
      setTimeout(function () {
        friends.classList.remove("display-none");
      }, 500);
    }

    if (scrollSnap.scrollTop >= markerOnMapLocation.top * 2) {
      for (let title of friends.querySelectorAll("h2, h1")) {
        title.classList.add("animation-on");
      }
      setTimeout(function () {
        lastSection.classList.remove("display-none");
      }, 500);
    }

    if (scrollSnap.scrollTop >= markerOnMapLocation.top * 3) {
      setTimeout(function () {
        footer.classList.remove("display-none");
      }, 500);
    }
  });
};
