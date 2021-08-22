import { bottomDrawer, postsHTML } from "./index.js";
import { postEventsInit } from "./post.js";
import { writeEventsInit } from "./write.js";
import { bottomDrawerEventInit } from "./bottom-drawer.js";

export function postsEventsInit() {
  new Promise((resolve, reject) => {
    bottomDrawer.innerHTML = postsHTML;

    resolve();
  }).then(() => {
    bottomDrawerEventInit(bottomDrawer);

    // 아래 코드는 주석처리 됨. 왜냐하면, 어짜피 a태그 클릭 시 해시값이 변경되어 index.js의 route() 함수가 postEventsInit()를 실행시켜줌
    /**
     * // 게시글 목록 클릭 시 발생하는 이벤트
     * let postList = bottomDrawer.querySelectorAll(".list-group>a");
     * for (let post of postList) {
     * 
     * // 게시글 클릭 시 게시글 페이지로 이동
     *  post.addEventListener("click", function () {
     *    postEventsInit();
     * });
     * }
     * 
     * // 글쓰기 버튼 클릭 시 발생하는 이벤트
     * let writeButton = document.querySelector("#write");
     * writeButton.addEventListener("click", () => {
     *   writeEventsInit();
     * });
     */
    
  });
};