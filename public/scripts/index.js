import { bottomDrawerInit, bottomDrawerInit } from "./bottom-drawer.js";

export let bottomDrawer;
export let drawerSection1;
export let drawerSection2;
export let knob;

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
      // 바텀 드로워 이벤트 설정
      bottomDrawerInit();
    })
    .catch(function (err) {
      console.warn("Bottom drawer fetch went wrong.", err);
    });
};

