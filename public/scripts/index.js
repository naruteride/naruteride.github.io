import { postsEventsInit } from "./posts.js";

let bottomDrawer;

let postsHTML;
let postHTML;

onload = function () {
  bottomDrawer = document.querySelector("#bottom-drawer");

  // 게시글 fetch
  fetch("/views/drawer-category/post.html")
    .then(response => {
      return response.text();
    })
    .then(html => {
      postHTML = html;
    })
    .catch(err => {
      console.warn("post of bottom drawer fetch went wrong.", err);
    });

  // 게시판 fetch
  fetch("/views/drawer-category/posts.html")
    .then((response) => {

      console.log("게시판 fetch 실행됨.");
      
      return response.text();
    })
    .then(html => {
      bottomDrawer.innerHTML = postsHTML = html;
    })
    .then(() => {
      postsEventsInit(bottomDrawer, postHTML);
    })
    .catch(err => {
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
        console.warn("Promise returning to posts went wrong.", err);
      });
  }
};
