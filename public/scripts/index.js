import { bottomDrawerInit } from "./bottom-drawer.js";

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
      drawerSection1 = bottomDrawer.querySelector("section:nth-child(1)");
      drawerSection2 = bottomDrawer.querySelector("section:nth-child(2)");
      knob = bottomDrawer.querySelector(".knob");
    })
    .then(function () {
      // 바텀 드로워 이벤트 초기화
      bottomDrawerInit(bottomDrawer, drawerSection1, drawerSection2, knob);
    })
    .catch(function (err) {
      console.warn("Bottom drawer fetch went wrong.", err);
    });
};

