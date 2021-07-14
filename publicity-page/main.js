onload = function() {

    let markerOnMap = document.querySelector("#marker-on-map");
    let markerOnMapLocation = markerOnMap.getBoundingClientRect();


    let friends = document.querySelector("#friends");
    let friendsLocation = friends.getBoundingClientRect();


    // let hole = document.querySelector("#hole");
    // let holeLocation = hole.getBoundingClientRect();






    let scrollSnap = document.querySelector(".scroll-snap");
    scrollSnap.addEventListener("scroll", function() {

        if(scrollSnap.scrollTop >= markerOnMapLocation.top) {
            for(let li of markerOnMap.querySelectorAll("ol>li")) {
                li.classList.add("animation-on");
            }
        }


        if(scrollSnap.scrollTop >= friendsLocation.top) {
            for(let title of friends.querySelectorAll("h2, h1")) {
                title.classList.add("animation-on");
            }
        }


        // if(scrollSnap.scrollTop == holeLocation.top) {
        //     hole.querySelector("#hole > span").classList.add("animation-on");
        // }

        setTimeout(function() {
            console.log("터치 이벤트 넌");
            scrollSnap.classList.add("touch-action-none");
        }, 50)
        setTimeout(function() {
            console.log("터치 이벤트 언셋");
            scrollSnap.classList.remove("touch-action-none");
        }, 1000)
    })
}

