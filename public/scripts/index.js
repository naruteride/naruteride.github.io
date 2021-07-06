import { chromeBugFixer } from "./bottom-drawer.js";

export let bottomDrawer;

onload = function () {
  bottomDrawer = document.querySelector("#bottom-drawer");

  // 바텀 드로워 fetch
  fetch("./bottom-drawer.html")
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      bottomDrawer.innerHTML = html;
    })
    // 크롬 버그 해결
    .then(function () {
      chromeBugFixer();
    })
    .catch(function (err) {
      console.warn("Bottom drawer fetch went wrong.", err);
    });
};

