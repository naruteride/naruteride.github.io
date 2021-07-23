import { bottomDrawerEventInit } from "./bottom-drawer.js";

export function postsEventsInit(bottomDrawer, postHTML) {
  console.log("게시판 이벤트 초기화");
  let postList = bottomDrawer.querySelectorAll(".list-group>a");

  for (let post of postList) {
    post.addEventListener("click", function (event) {

      new Promise(function (resolve, reject) {
        bottomDrawer.innerHTML = postHTML;

        resolve();
      })
        .then(function () {
          // 바텀 드로워 돔 정의
          let drawerSection1 = bottomDrawer.querySelector(
            "section:nth-child(1)"
          );
          let drawerSection2 = bottomDrawer.querySelector(
            "section:nth-child(2)"
          );
          let knob = bottomDrawer.querySelector(".knob");

          return { drawerSection1, drawerSection2, knob };
        })
        .then(postDOM => {
          bottomDrawerEventInit(
            bottomDrawer,
            postDOM.drawerSection1,
            postDOM.drawerSection2,
            postDOM.knob
          );

          console.log("게시글 클릭 이벤트 끝");
        })
        .catch((err) => {
          console.warn("post click event Promise went wrong.", err);
        });
    });
  }
}
