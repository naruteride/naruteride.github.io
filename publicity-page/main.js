onload = function () {
  let markerOnMap = document.querySelector("#marker-on-map");
  let markerOnMapLocation = markerOnMap.getBoundingClientRect();
	let didMarkerOnMapIsWork = false;

  let friends = document.querySelector("#friends");
  let friendsLocation = friends.getBoundingClientRect();
	let didfriendsIsWork = false;

  let lastSection = document.querySelector("#last-section");
  let lastSectionLocation = lastSection.getBoundingClientRect();
	let didlastSectionIsWork = false;

  let footer = document.querySelector("#footer");
  let footerLocation = footer.getBoundingClientRect();

  let scrollSnap = document.querySelector(".scroll-snap");
  scrollSnap.addEventListener("scroll", function (event) {
    if (scrollSnap.scrollTop >= markerOnMapLocation.top && !didMarkerOnMapIsWork) {
			didMarkerOnMapIsWork = true;

      for (let li of markerOnMap.querySelectorAll("ol>li")) {
        li.classList.add("animation-on");
      }

			scrollSnap.classList.add("pointer-events-none");
			console.log("스크롤 스냅은 포인터이벤츠 넌");

      setTimeout(function () {
        friends.classList.remove("display-none");
				console.log("세번째 섹션 display: flex");
      }, 2000);
			setTimeout(function () {
				scrollSnap.classList.remove("pointer-events-none");
				console.log("스크롤 스냅은 포인터이벤츠 오토");
			}, 4000)
    }

    if (scrollSnap.scrollTop >= markerOnMapLocation.top * 2 && !didfriendsIsWork) {
			didfriendsIsWork = true;

      for (let title of friends.querySelectorAll("h2, h1")) {
        title.classList.add("animation-on");
      }

			scrollSnap.classList.add("pointer-events-none");
			console.log("스크롤 스냅은 포인터이벤츠 넌")

      setTimeout(function () {
        lastSection.classList.remove("display-none");
				console.log("네번째 섹션 display: flex");
      }, 2000);
			setTimeout(function () {
				scrollSnap.classList.remove("pointer-events-none");
				console.log("스크롤 스냅은 포인터이벤츠 오토");
			}, 4000)
    }

    if (scrollSnap.scrollTop >= markerOnMapLocation.top * 3 && !didlastSectionIsWork) {
			didlastSectionIsWork = true;

			scrollSnap.classList.add("pointer-events-none");
			console.log("스크롤 스냅은 포인터이벤츠 넌")

      setTimeout(function () {
        footer.classList.remove("display-none");
				console.log("푸터 display: flex");
      }, 500);
			setTimeout(function () {
				scrollSnap.classList.remove("pointer-events-none");
				console.log("스크롤 스냅은 포인터이벤츠 오토");
			}, 520)
    }
  });
};
