import { bottomDrawerEventInit } from "./bottom-drawer.js";

let bottomDrawer;
let drawerSection1;
let drawerSection2;
let knob;

onload = function () {
  bottomDrawer = document.querySelector("#bottom-drawer");

  // 바텀 드로워 fetch
  fetch("/views/bottom-category/posts.html")
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      bottomDrawer.innerHTML = html;
    })
    .then(function () {
      // 바텀 드로워 돔 정의
      drawerSection1 = bottomDrawer.querySelector("section:nth-child(1)");
      drawerSection2 = bottomDrawer.querySelector("section:nth-child(2)");
      knob = bottomDrawer.querySelector(".knob");
    })
    .then(function () {
      // 바텀 드로워 이벤트 초기화
      bottomDrawerEventInit(bottomDrawer, drawerSection1, drawerSection2, knob);
      if (!!window.chrome) {
        chromeBugFixer();
      }
    })
    .catch(function (err) {
      console.warn("Bottom drawer fetch went wrong.", err);
    });
};


// 크롬 스크롤 버그 고치는 함수
function chromeBugFixer() {
  // 터치 할 때 .pointer-events-auto가 추가되고, 땔 때 지워짐.
  // 섹션 1
  drawerSection1.addEventListener("touchstart", function () {
    bottomDrawer.classList.add("pointer-events-auto");
    console.log("touch start");
  });
  drawerSection1.addEventListener("touchend", function () {
    setTimeout(() => {
      bottomDrawer.classList.remove("pointer-events-auto");
      console.log("touch end");
    }, 600);
  });
  // 섹션 2
  drawerSection2.addEventListener("touchstart", function () {
    bottomDrawer.classList.add("pointer-events-auto");
    console.log("touch start");
  });
  drawerSection2.addEventListener("touchend", function () {
    setTimeout(() => {
      bottomDrawer.classList.remove("pointer-events-auto");
      console.log("touch end");
    }, 600);
  });
}
