import { bottomDrawer, postHTML } from "./index.js";
import { bottomDrawerEventInit } from "./bottom-drawer.js";

export function postEventsInit() {
  new Promise((resolve, reject) => {
    bottomDrawer.innerHTML = postHTML;

    resolve();
  }).then(() => {
    bottomDrawerEventInit(bottomDrawer);

    

    db.collection("posts").doc(location.hash.split(":")[1]).get().then((doc) => {
      console.log(doc.data());
      console.log(doc.data().nickname);
    })
  });
}
