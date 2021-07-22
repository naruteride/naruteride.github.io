import { bottomDrawerEventInit } from "./bottom-drawer.js";

export function postsEventsInit(bottomDrawer, postHtml) {
  let posts = bottomDrawer.querySelectorAll(".list-group>a");

  for (post of posts) {
    post.addEventListener("click", function () {
      console.log("게시글 클릭 이벤트 시작");

      new Promise((resolve, reject) => {
        window.location.hash = "post";
        bottomDrawer.innerHTML = postHtml;
      })
        .then(() => {
          // 바텀 드로워 돔 정의
          drawerSection1 = bottomDrawer.querySelector("section:nth-child(1)");
          drawerSection2 = bottomDrawer.querySelector("section:nth-child(2)");
          knob = bottomDrawer.querySelector(".knob");

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
          console.warn("post click event went wrong.", err);
        })

      alert("게시글 클릭 이벤트 끝");
    });
  }
}