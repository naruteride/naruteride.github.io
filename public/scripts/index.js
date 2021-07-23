import { bottomDrawerEventInit } from "./bottom-drawer.js";
import { postsEventsInit } from "./posts.js";

let bottomDrawer;

let postsHTML;
let postHTML;

onload = function () {
  bottomDrawer = document.querySelector("#bottom-drawer");

  // 게시글 fetch
  fetch("/views/drawer-category/post.html")
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      postHTML = html;
    })
    .catch(function (err) {
      console.warn("post of bottom drawer fetch went wrong.", err);
    });

  // 게시판 fetch
  fetch("/views/drawer-category/posts.html")
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      bottomDrawer.innerHTML = postsHTML = html;
    })
    .then(function () {
      postsEventsInit(bottomDrawer, postHTML);
    })
    .catch(function (err) {
      console.warn("posts of bottom drawer fetch went wrong.", err);
    });
};

// 해쉬 변화 감지
onhashchange = function () {
  // 만약 해쉬가 비어있다면 == 게시글에서 뒤로가기 버튼을 눌렀다면
  if (location.hash == "") {
    new Promise(function (resolve, reject) {
      bottomDrawer.innerHTML = postsHTML;

      resolve();
    })
      .then(function () {
        postsEventsInit(bottomDrawer, postHTML);
      })
      .catch(function (err) {
        console.warn("return to posts Promise went wrong.", err);
      });
  }
};
