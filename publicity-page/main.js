onload = function () {
  let markerOnMap = document.querySelector("#marker-on-map");
  let markerOnMapLocation = markerOnMap.getBoundingClientRect();
  let didMarkerOnMapWork = false;

  let friends = document.querySelector("#friends");
  let friendsLocation = friends.getBoundingClientRect();
  let didFriendsWork = false;

  let lastSection = document.querySelector("#last-section");
  let lastSectionLocation = lastSection.getBoundingClientRect();
  let didLastSectionWork = false;

  let footer = document.querySelector("#footer");
  let footerLocation = footer.getBoundingClientRect();

  let scrollSnap = document.querySelector(".scroll-snap");
  scrollSnap.addEventListener("scroll", function (event) {
    if (
      scrollSnap.scrollTop >= markerOnMapLocation.top &&
      !didMarkerOnMapWork
    ) {
      didMarkerOnMapWork = true;

      for (let li of markerOnMap.querySelectorAll("ol>li")) {
        li.classList.add("animation-on");
      }

      scrollSnap.classList.add("overflow-hidden");

      setTimeout(function () {
        friends.classList.remove("display-none");
        markerOnMap.scrollIntoView(true);
        console.log("세번째 섹션 display: flex && 두번째 섹션으로 뷰포트 이동");

        scrollSnap.classList.remove("overflow-hidden");
      }, 300);
    }

    if (
      scrollSnap.scrollTop >= markerOnMapLocation.top * 2 &&
      !didFriendsWork
    ) {
      didFriendsWork = true;

      for (let title of friends.querySelectorAll("h2, h1")) {
        title.classList.add("animation-on");
      }

      scrollSnap.classList.add("overflow-hidden");

      setTimeout(function () {
        lastSection.classList.remove("display-none");
        friends.scrollIntoView(true);
        console.log("네번째 섹션 display: flex && 세번째 섹션으로 뷰포트 이동");

        scrollSnap.classList.remove("overflow-hidden");
      }, 300);
    }

    if (
      scrollSnap.scrollTop >= markerOnMapLocation.top * 3 &&
      !didLastSectionWork
    ) {
      didLastSectionWork = true;

      scrollSnap.classList.add("overflow-hidden");

      setTimeout(function () {
        footer.classList.remove("display-none");
        lastSection.scrollIntoView(true);
        console.log("푸터 display: flex  && 네번째 섹션으로 뷰포트 이동");

        scrollSnap.classList.remove("overflow-hidden");
      }, 300);
    }
  });
};
