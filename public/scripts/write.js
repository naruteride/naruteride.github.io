import { bottomDrawer, writeHTML } from "./index.js";
import { bottomDrawerEventInit } from "./bottom-drawer.js";

let snackbar = document.querySelector("#snackbar");

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

        // 만약 마커가 찍혀있지 않다면 formdata이벤트를 발생시키지 않고, 마커를 찍으라는 토스트를 띄움.
        if (
          window.writeLatLng != undefined) {
          new FormData(writeForm);
        } else {
          onSnackbar("마커를 찍어 위치를 지정해주세요.");
        }
      });

      // 만약 글쓰기 form의 formdata 이벤트가 발생한다면,
      writeForm.addEventListener("formdata", (e) => {
        write(e.formData);
      });
    })
    .then(() => {
      // 만약 글쓰기 페이지가 로드 되었는데 마커를 찍지 않았다면
      if (window.writeLatLng == undefined) {
        onSnackbar("마커를 찍어 위치를 지정해주세요.");
      }
    })
    .catch((err) => {
      console.warn("writeEventsInit fetch went wrong.", err);
    });
}

// 글쓰기 함수
function write(values) {
  document.querySelector("#loading-cover").classList.add("on"); // 로딩창

  fetch("https://happy-engelbart-5479aa.netlify.app/.netlify/functions/index", {
    method: "POST",
    body: JSON.stringify({
      nickname: values.get("nickname"),
      password: values.get("password"),
      lat: window.writeLatLng.lat(),
      lng: window.writeLatLng.lng(),
      youtubeAddress: values.get("youtubeAddress"),
      content: values.get("content"),
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => {
    response.json().then((resData) => {
      if (response.status == 200) {
        // 만약 글쓰기 저장에 성공한다면
        document.querySelector("#loading-cover").classList.remove("on"); // 로딩창 끔
        onSnackbar(resData.message); // 토스트
        window.writeLatLng = undefined; // 마커 좌표 전역변수 초기화

        location.hash = "";
      } else {
        onSnackbar("Error");
      }
    });
  });
}

// 스낵바 함수
function onSnackbar(message) {
  snackbar.innerText = message;
  snackbar.classList.add("show");

  setTimeout(() => {
    snackbar.classList.remove("show");
  }, 3000);
}
