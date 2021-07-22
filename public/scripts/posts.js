import { bottomDrawerEventInit } from "./bottom-drawer.js";

export function postsEventsInit(bottomDrawer, postHtml) {
  console.log("게시판 이벤트 초기화")
  let postList = bottomDrawer.querySelectorAll(".list-group>a");

  for (let post of postList) {
    post.addEventListener("click", function () {
      console.log("게시글 클릭 이벤트 시작");

      new Promise((resolve, reject) => {
        window.location.hash = "post";
        bottomDrawer.innerHTML = postHtml;
      })
        .then(() => {
          // 바텀 드로워 돔 정의
          let drawerSection1 = bottomDrawer.querySelector("section:nth-child(1)");
          let drawerSection2 = bottomDrawer.querySelector("section:nth-child(2)");
          let knob = bottomDrawer.querySelector(".knob");

          return { drawerSection1, drawerSection2, knob };
        })
        .then((postDOM) => {
          bottomDrawerEventInit(
            bottomDrawer,
            postDOM.drawerSection1,
            postDOM.drawerSection2,
            postDOM.knob
          );
        })
        .catch(err => {
          console.warn("post click event Promise went wrong.", err);
        })

      console.log("게시글 클릭 이벤트 끝");
    });
  }
}