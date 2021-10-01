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

    db.collection("posts").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
      });
  });
  });
};