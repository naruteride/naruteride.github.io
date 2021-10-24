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
        let data = doc.data();

        bottomDrawer.querySelector(".title>b").innerText = data.nickname; // 곡 이름
        bottomDrawer.querySelector(".title>i").innerText = "- " + data.singer; // 가수
        bottomDrawer.querySelector(".nickname").innerText = "@" + data.nickname; // 작성자

        // bottomDrawer.querySelector(".post-date").innerText = toStringByFormatting(DateTime.parse(data.date.toDate().toString())); // 글 작성일
        bottomDrawer.querySelector(".post-date").innerText = data.date.toDate().toString();

        bottomDrawer.querySelector(".summary-content").innerText = data.content; // 게시글 내용
        bottomDrawer.querySelector(".content>p").innerText = data.content; // 게시글 내용
        bottomDrawer.querySelector(".heart-point").innerText = data.heartPoint; // 하트포인트
      });
  });
}

function toStringByFormatting(source) {
  const year = source.getFullYear();
  const month = leftPad(source.getMonth() + 1);
  const day = leftPad(source.getDate());
  return [year, month, day].join(".");
}
