import { postsEventsInit } from "./posts.js";
import { postEventsInit } from "./post.js";
import { writeEventsInit } from "./write.js";


export let bottomDrawer;
export let postsHTML;
export let postHTML;
export let writeHTML;


onload = function () {
  bottomDrawer = document.querySelector("#bottom-drawer");

  // 게시판 fetch와 게시글fetch가 모두 완료되면 route 함수를 실행시킴
  Promise.all([postsFetch(), postFetch()]).then(() => {
    route();
    writeFetch();
  });
};

// 게시판 fetch
function postsFetch() {
  return fetch("/views/drawer-category/posts.html")
    .then((response) => {
      return response.text();
    })
    .then((html) => {
      postsHTML = html;
    })
    .catch((err) => {
      console.warn("posts of bottom drawer fetch went wrong.", err);
    });
};

// 게시글 fetch
function postFetch() {
  return fetch("/views/drawer-category/post.html")
    .then((response) => {
      return response.text();
    })
    .then((html) => {
      postHTML = html;
    })
    .catch((err) => {
      console.warn("post of bottom drawer fetch went wrong.", err);
    });
};

// 글쓰기 fetch
function writeFetch() {
  return fetch("/views/drawer-category/write.html")
    .then((response) => {
      return response.text();
    })
    .then((html) => {
      writeHTML = html;
    })
    .catch((err) => {
      console.warn("write of bottom drawer fetch went wrong.", err);
    });
};

// 로케이션 해시에 "#post"가 있다면 '게시글' 페이지로, 그렇지 않다면 '게시판' 페이지로 간다.
function route() {
  if (location.hash.indexOf("#post") != -1) {
    postEventsInit();
  } else {
    postsEventsInit();
  }
};

// 해쉬 변화 감지
onhashchange = function () {
  route();
};
