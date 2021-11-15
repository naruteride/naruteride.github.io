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

        if (location.hash == "#post:o0hO0mdcKkGwu35M6xNJ") {
          bottomDrawer.querySelector(".title>b").innerText = "사계"; // 곡 이름
          bottomDrawer.querySelector("#post-summary-information>img").src = "https://i.ytimg.com/vi/4HG_CJzyX6A/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDlcukfnsci9YDW1gjPNg1802v9fQ"
          bottomDrawer.querySelector("iframe").src = "https://www.youtube.com/embed/4HG_CJzyX6A";
          bottomDrawer.querySelector(".title>i").innerText = "- " + data.singer; // 가수
        } else if (location.hash == "#post:R61CZyL9mD791Vz1hJFs") {
          bottomDrawer.querySelector(".title>b").innerText = "text me"; // 곡 이름
          bottomDrawer.querySelector("#post-summary-information>img").src = "https://i.ytimg.com/vi/xfJPCenjZzY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuVutkCsFnsKo7YYa35AO6r2HjmQ"
          bottomDrawer.querySelector("iframe").src = "https://www.youtube.com/embed/xfJPCenjZzY";
          bottomDrawer.querySelector(".title>i").innerText = "- " + data.singer; // 가수
          document.querySelector(".text-me").classList.add("on")
        } else if (location.hash == "#post:adC5370lnrsWVT2cmWJn") {
          bottomDrawer.querySelector(".title>b").innerText = "10,000 hour"; // 곡 이름
          bottomDrawer.querySelector("#post-summary-information>img").src = "https://i.ytimg.com/vi/4HG_CJzyX6A/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDlcukfnsci9YDW1gjPNg1802v9fQ"
          bottomDrawer.querySelector("iframe").src = "https://www.youtube.com/embed/epYR4Bb3G7w";
          bottomDrawer.querySelector(".title>i").innerText = "- " + data.singer; // 가수
          document.querySelector(".man").classList.add("on");
        } else if (location.hash == "#post:uTIcsjJpCLysr57eCem5") {
          bottomDrawer.querySelector(".title>b").innerText = "Coin"; // 곡 이름
          bottomDrawer.querySelector("#post-summary-information>img").src = "https://i.ytimg.com/vi/86BST8NIpNM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD97smoWGq_cUtP8CnHcxX6dB0y2Q" // 엘범 표지
          bottomDrawer.querySelector("iframe").src = "https://www.youtube.com/embed/86BST8NIpNM";
          bottomDrawer.querySelector(".title>i").innerText = "- " + data.singer; // 가수
        } else if (location.hash == "#post:JGQ5J9GgfpG8VG5B2Fp9") {
          bottomDrawer.querySelector(".title>b").innerText = "삐삐"; // 곡 이름
          bottomDrawer.querySelector("#post-summary-information>img").src = "https://i.ytimg.com/vi/nM0xDI5R50E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC54rlu0sCI-33MNxWaZYuGolYCJQ" // 엘범 표지
          bottomDrawer.querySelector("iframe").src = "https://www.youtube.com/embed/nM0xDI5R50E";
          for (let asdf of document.querySelectorAll(".beep")) {
            asdf.classList.add("on") // 댓글
          }
        } else if (location.hash == "#post:SB11jNxC3DOxie3tv4AL") {
          bottomDrawer.querySelector(".title>b").innerText = "낙하"; // 곡 이름
          bottomDrawer.querySelector("#post-summary-information>img").src = "https://i.ytimg.com/vi/EtiPbWzUY9o/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCnd7v7TLYMxoZa9gLo7H-9myff5Q" // 엘범 표지
          bottomDrawer.querySelector("iframe").src = "https://www.youtube.com/embed/EtiPbWzUY9o";
          for (let asdf of document.querySelectorAll(".jinny")) {
            asdf.classList.add("on") // 댓글
          }
        } else if (location.hash == "#post:ㄹㄹㄹㄹㄹㄹㄹㄹ") {
          bottomDrawer.querySelector(".title>b").innerText = ""; // 곡 이름
          bottomDrawer.querySelector("#post-summary-information>img").src = "" // 엘범 표지
          bottomDrawer.querySelector("iframe").src = "";
        } else {
          bottomDrawer.querySelector(".title>b").innerText = "LILAC"; // 곡 이름
          bottomDrawer.querySelector(".title>i").innerText = "- " + "IU"; // 가수
        }
        
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
