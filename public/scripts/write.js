import { bottomDrawer, writeHTML } from "./index.js";
import { bottomDrawerEventInit } from "./bottom-drawer.js";

export function writeEventsInit() {
  new Promise((resolve, reject) => {
    bottomDrawer.innerHTML = writeHTML;
		console.log(window.writeLatLng)
    resolve();
  }).then(() => {
    bottomDrawerEventInit(bottomDrawer);
  });
}
