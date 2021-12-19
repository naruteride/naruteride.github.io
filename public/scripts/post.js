import { bottomDrawer, postHTML } from "./index.js";
import { bottomDrawerEventInit } from "./bottom-drawer.js";

export function postEventsInit() {
  let postID = location.hash.split(":")[1];

  new Promise((resolve, reject) => {
    bottomDrawer.innerHTML = postHTML;

    resolve();
  }).then(() => {
    bottomDrawerEventInit(bottomDrawer);

    // 좋아요 버튼 누름
    bottomDrawer.querySelector("#likeit").addEventListener("click", () => {
      // 쿠키의 liked에 이미 좋아요를 눌렀는지 검사함
      let likedPostIDs = document.cookie
        .split("; ")
        .find((value) => value == "liked") || [];

      for (let likedPostID of likedPostIDs) {
        if (likedPostID == postID) {
          onSnackbar("하루에 한 번만 좋아요를 누를 수 있습니다.");
        } else {
          db.collection("posts")
            .doc(location.hash.split(":")[1])
            .update({
              heartPoint: firebase.firestore.FieldValue.increment(1),
            });

          let haertPointElement = bottomDrawer.querySelector(".heart-point");
          haertPointElement.innerText =
            parseInt(haertPointElement.innerText) + 1;

          // 쿠키의 liked에 현재 포스트 ID 추가
          document.cookie = "liked:" + [...likedPostIDs, postID];
        }
      }
    });

    // 게시글 노출
    db.collection("posts")
      .doc(postID)
      .get()
      .then((doc) => {
        let data = doc.data();

        // 곡 참조
        data.song.get().then((songDoc) => {
          console.log("송 아이디: " + songDoc.id);

          let songData = songDoc.data();

          // 썸네일
          bottomDrawer.querySelector("#post-summary-information>img").src =
            "https://img.youtube.com/vi/" + songData.linkCode + "/0.jpg";

          // 곡 제목
          bottomDrawer.querySelector(".title>b").innerText = songData.title;

          // 아티스트
          bottomDrawer.querySelector(".title>i").innerText =
            "- " + songData.artist;

          // iframe
          bottomDrawer.querySelector("iframe").src =
            "https://www.youtube.com/embed/" + songData.linkCode;
        });

        if (location.hash == "#post:o0hO0mdcKkGwu35M6xNJ") {
        } else if (location.hash == "#post:R61CZyL9mD791Vz1hJFs") {
          document.querySelector(".text-me").classList.add("on");
        } else if (location.hash == "#post:adC5370lnrsWVT2cmWJn") {
          document.querySelector(".man").classList.add("on");
        } else if (location.hash == "#post:uTIcsjJpCLysr57eCem5") {
        } else if (location.hash == "#post:JGQ5J9GgfpG8VG5B2Fp9") {
          for (let asdf of document.querySelectorAll(".beep")) {
            asdf.classList.add("on"); // 댓글
          }
        } else if (location.hash == "#post:SB11jNxC3DOxie3tv4AL") {
          for (let asdf of document.querySelectorAll(".jinny")) {
            asdf.classList.add("on"); // 댓글
          }
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

// 유닉스 타임스템프를 yyyy-MM-dd 꼴로 바꿔주는 함수
function timeConverter(UNIX_timestamp) {
  let a = new Date(UNIX_timestamp);
  let year = a.getFullYear();
  let month = a.getMonth() + 1;
  let date = a.getDate();
  var time = year + ". " + month + ". " + date + ".";
  return time;
}

// 스낵바 함수
function onSnackbar(message) {
  snackbar.innerText = message;
  snackbar.classList.add("show");

  setTimeout(() => {
    snackbar.classList.remove("show");
  }, 3000);
}
