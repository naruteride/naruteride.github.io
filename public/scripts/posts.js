// import { bottomDrawerEventInit } from "./bottom-drawer.js";

export function postsEventsInit(bottomDrawer, postHtml) {
  let posts = bottomDrawer.querySelectorAll(".list-group>a");
  for (post of posts) {
    post.addEventListener("click", function () {
      console.log("게시판에서 게시글 조금만 클릭됨");
      window.location.href = window.location.href + "#post";
      bottomDrawer.innerHTML = postHtml;
      alert("게시판에서 게시글 완벽히 클릭됨");
		});
  }
}
