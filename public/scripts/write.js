import { bottomDrawer, writeHTML } from "./index.js";
import { bottomDrawerEventInit } from "./bottom-drawer.js";

export function writeEventsInit() {
  new Promise((resolve, reject) => {
    bottomDrawer.innerHTML = writeHTML;

    resolve();
  })
    .then(() => {
      bottomDrawerEventInit(bottomDrawer);

      // 만약 form의 submit이 동작한다면
      let writeForm = bottomDrawer.querySelector("#write-form");
      writeForm.addEventListener("submit", (e) => {
        e.preventDefault();

        new FormData(writeForm);
      });

      writeForm.addEventListener("formdata", (e) => {
        console.log("formdata fired:");
        console.log(e);
        console.log(e.formData);
        console.log(e.formData.get())
        
        for (let value of e.formData.values()) {
          console.log(value);
        }
      });
    })
    .then(() => {
      // 만약 글쓰기 페이지가 로드 되었는데 마커를 찍지 않았다면
      if (window.writeLatLng == undefined) {
        alert("지도 위에 원하는 위치를 꾹 눌러 마커를 생성하세요!");
      }
    })
    .catch((err) => {
      console.warn("writeEventsInit fetch went wrong.", err);
    });
}

export function write() {}
