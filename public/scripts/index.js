import { bottomDrawerEventInit } from "./bottom-drawer.js";

let bottomDrawer;
let drawerSection1;
let drawerSection2;
let knob;

let posts;
let post;

onload = function () {
  bottomDrawer = document.querySelector("#bottom-drawer");

  // 게시판 fetch
  fetch("/views/bottom-category/posts.html")
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      posts = html;
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
    })
    .catch(function (err) {
      console.warn("posts of bottom drawer fetch went wrong.", err);
    });

  // 게시글 fetch
  fetch("/views/bottom-category/post.html")
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      post = html;
    })
    .catch(function (err) {
      console.warn("post of bottom drawer fetch went wrong.", err);
    });
};
