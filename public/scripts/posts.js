import { bottomDrawer, postsHTML } from "./index.js";
import { postEventsInit } from "./post.js";
import { bottomDrawerEventInit } from "./bottom-drawer.js";

export function postsEventsInit() {
  new Promise((resolve, reject) => {
    bottomDrawer.innerHTML = postsHTML;

    resolve();
  }).then(() => {
    bottomDrawerEventInit(bottomDrawer);

    let postList = bottomDrawer.querySelectorAll(".list-group>a");
    for (let post of postList) {
      post.addEventListener("click", function () {
        postEventsInit();
      });
    }
  });
};