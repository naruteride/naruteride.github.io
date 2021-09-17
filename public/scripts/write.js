import { bottomDrawer, writeHTML } from "./index.js";
import { bottomDrawerEventInit } from "./bottom-drawer.js";

export function writeEventsInit() {
  new Promise((resolve, reject) => {
    bottomDrawer.innerHTML = writeHTML;

    resolve();
  })
    .then(() => {
      bottomDrawerEventInit(bottomDrawer);

      // 만약 글쓰기 form의 submit이 동작한다면, 해당 form에 formdata이벤트를 발생시킴
      let writeForm = bottomDrawer.querySelector("#write-form");
      writeForm.addEventListener("submit", (e) => {
        e.preventDefault();

        new FormData(writeForm);
      });

      // 만약 글쓰기 form의 formdata 이벤트가 발생한다면,
      writeForm.addEventListener("formdata", (e) => {
        write(e.formData);
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

function write(values) {
  db.collection("posts")
    .add({
      nickname: values.get("nickname"),
      password: values.get("password"),
      lat: window.writeLatLng.lat(),
      lng: window.writeLatLng.lng(),
      youtubeAddress: values.get("youtubeAddress"),
      content: values.get("content"),
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
      sendToNode(docRef.id)
    });
}

function sendToNode(documentId) {
  fetch("https://happy-engelbart-5479aa.netlify.app/functions/index.js", {
    method: "GET",
    body: JSON.stringify({
      documentId: documentId,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}
