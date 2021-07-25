import { bottomDrawer, postHTML } from "./index.js";
import { bottomDrawerEventInit } from "./bottom-drawer.js";

export function postEventsInit() {
  new Promise((resolve, reject) => {
    bottomDrawer.innerHTML = postHTML;

    resolve();
  }).then(() => {
    bottomDrawerEventInit(bottomDrawer);
  });
};