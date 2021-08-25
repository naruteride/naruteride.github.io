import { bottomDrawer, writeHTML } from "./index.js";
import { bottomDrawerEventInit } from "./bottom-drawer.js";

export function writeEventsInit() {
  new Promise((resolve, reject) => {
    bottomDrawer.innerHTML = writeHTML;

    resolve();
  })
    .then(() => {
      bottomDrawerEventInit(bottomDrawer);
    })
    .then(() => {
      console.log(window.writeLatLng);
      // 만약 글쓰기 페이지가 로드 되었는데 마커를 찍지 않았다면
      if ((window.writeLatLng == undefined)) {
        alert("지도를 꾹 눌러 생성하고픈 위치에 마커를 생성하세요!");
      }
    })
    .catch((err) => {
      console.warn("writeEventsInit fetch went wrong.", err);
    });
}
