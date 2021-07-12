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
            console.log("포인터이벤츠 넌");
            scrollSnap.classList.add("pointer-events-none");
        }, 50)
        setTimeout(function() {
            console.log("포인터이벤츠 오토");
            scrollSnap.classList.remove("pointer-events-none");
        }, 100)
    })
}

