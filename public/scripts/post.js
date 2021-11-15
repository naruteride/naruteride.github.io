import { bottomDrawer, postHTML } from "./index.js";
import { bottomDrawerEventInit } from "./bottom-drawer.js";

export function postEventsInit() {
  new Promise((resolve, reject) => {
    bottomDrawer.innerHTML = postHTML;

    resolve();
  }).then(() => {
    bottomDrawerEventInit(bottomDrawer);

    db.collection("posts")
      .doc(location.hash.split(":")[1])
      .get()
      .then((doc) => {
        if (location.hash.indexOf("/* 여기에 이상한 값 */")) {
          bottomDrawer.querySelector(".title>b").innerText = data.nickname; // 곡 이름
          bottomDrawer.querySelector(".title>i").innerText = "- " + data.singer; // 가수
        } else if (location.hash.indexOf("/* 여기에 이상한 값 */")) {
          bottomDrawer.querySelector(".title>b").innerText = data.nickname; // 곡 이름
          bottomDrawer.querySelector(".title>i").innerText = "- " + data.singer; // 가수
        } else {
          bottomDrawer.querySelector(".title>b").innerText = data.nickname; // 곡 이름
          bottomDrawer.querySelector(".title>i").innerText = "- " + data.singer; // 가수
        }


        bottomDrawer.querySelector(".title>i").innerText = "- " + data.singer; // 가수
        bottomDrawer.querySelector(".nickname").innerText = "@" + data.nickname; // 작성자
        bottomDrawer.querySelector(".post-date").innerText = timeConverter(
          data.date.toMillis()
        ); // 작성 날짜
        bottomDrawer.querySelector(".summary-content").innerText =
          data.content.replaceAll("\r\n", "  "); // 게시글 내용
        bottomDrawer.querySelector(".content>p").innerText = data.content; // 게시글 내용
        bottomDrawer.querySelector(".heart-point").innerText = data.heartPoint; // 하트포인트
      });
  });
}

function timeConverter(UNIX_timestamp) {
  let a = new Date(UNIX_timestamp);
  let year = a.getFullYear();
  let month = a.getMonth() + 1;
  let date = a.getDate();
  var time = year + ". " + month + ". " + date + ".";
  return time;
}
