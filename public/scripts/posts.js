import { bottomDrawerEventInit } from "./bottom-drawer.js";

export function postsEventsInit(bottomDrawer, postHTML) {

  console.log("게시판 이벤트 초기화 실행됨.");

  let postList = bottomDrawer.querySelectorAll(".list-group>a");

  for (let post of postList) {

    console.log("for of 문 실행 됨");

    post.addEventListener("click", function () {

      console.log("for of 문 안쪽의 post.addEventListener 실행됨.");

      new Promise((resolve, reject) => {

        console.log("for of 문 안의 Promise 실행됨.");
        
        bottomDrawer.innerHTML = postHTML;

        resolve();
      })
        .then(() => {
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

          console.log(bottomDrawer + "\n" + postDOM.drawerSection1 + "\n" + postDOM.drawerSection1  + "\n" + postDOM.knob);

          bottomDrawerEventInit(
            bottomDrawer,
            postDOM.drawerSection1,
            postDOM.drawerSection2,
            postDOM.knob
          );
        })
        .catch((err) => {
          console.warn("post click event Promise went wrong.", err);
        });
    });
  }
}
