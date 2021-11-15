import { bottomDrawer, postsHTML } from "./index.js";
import { postEventsInit } from "./post.js";
import { writeEventsInit } from "./write.js";
import { bottomDrawerEventInit } from "./bottom-drawer.js";

export function postsEventsInit() {
  new Promise((resolve, reject) => {
    bottomDrawer.innerHTML = postsHTML;

    resolve();
  }).then(() => {
    bottomDrawerEventInit(bottomDrawer);

    db.collection("posts")
      .orderBy("date"/*, "desc"*/)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let data = doc.data();

          // 날짜
          let postDateElement = postElement.querySelector(".post-date");
          let postDateToMillis = data.date.toMillis();
          let nowDate = new Date();
          if (nowDate.setUTCHours(24, 0, 0, 1) < postDateToMillis) {
            // 오늘 이후에 작성되었다면
            postDateElement.innerText = "Future?";
          } else if (nowDate.setUTCHours(-24, 0, 0, 1) < postDateToMillis) {
            // 오늘 작성되었다면
            postDateElement.innerText = "Today";
          } else if (nowDate.setUTCHours(-24, 0, 0, 1) < postDateToMillis) {
            // 어제 작성되었다면
            postDateElement.innerText = "1 days ago";
          } else if (nowDate.setUTCHours(-24, 0, 0, 1) < postDateToMillis) {
            // 그제 작성되었다면
            postDateElement.innerText = "2 days ago";
          } else if (nowDate.setUTCHours(-24, 0, 0, 1) < postDateToMillis) {
            // 3일 전에 작성되었다면
            postDateElement.innerText = "3 days ago";
          } else if (nowDate.setUTCHours(-24, 0, 0, 1) < postDateToMillis) {
            // 4일 전에 작성되었다면
            postDateElement.innerText = "4 days ago";
          } else if (nowDate.setUTCHours(-24, 0, 0, 1) < postDateToMillis) {
            // 5일 전에 작성되었다면
            postDateElement.innerText = "5 days ago";
          } else if (nowDate.setUTCHours(-24, 0, 0, 1) < postDateToMillis) {
            // 6일 전에 작성되었다면
            postDateElement.innerText = "6 days ago";
          } else {
            postDateElement.innerText = timeConverter(postDateToMillis);
          }




          postElement.href = "#post:" + doc.id;
          if (doc.id.indexOf("asdf")) {
            postElement.querySelector("img").src = ""
          } else if (doc.id.indexOf("asdf")) {
            postElement.querySelector("img").src = ""
          } else {
            postElement.querySelector("img").src =
              "https://i.ytimg.com/vi/v7bnOxV4jAc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-BbrAziLeGuA-10-FgEtym6bppQ";
          }



          
          postElement.querySelector("h5").innerText = data.nickname; // 노래 제목
          postElement.querySelector("p").innerText = data.content.replaceAll(
            "\r\n",
            "  "
          ); // 게시글 내용
          postElement.querySelector(".nickname").innerText =
            "@" + data.nickname; // 닉네임
          postElement.querySelector(".heart-point").innerText = data.heartPoint; // 하트 개수
          postElement.querySelector(".comments-number").innerText = "0"; // 댓글 개수

          document.querySelector("#post-board").appendChild(postElement);
          postElement = postElement.cloneNode(true);
        });
      });
  });
}

let postElement = document.createElement("a");
postElement.classList.add("list-group-item", "list-group-item-action");
postElement.setAttribute("aria-current", "true");

postElement.innerHTML = `
<img src="">
<div class="d-flex justify-content-between">
<h5 class="mb-1 text-ellipsis"></h5>
<small class="post-date"> days ago</small>
</div>
<p class="mb-1 summary-content text-ellipsis"></p>
<div class="d-flex justify-content-between">
<small class="nickname text-ellipsis">@</small>
<small class="text-end">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill-rule="evenodd"
            d="M6.736 4C4.657 4 2.5 5.88 2.5 8.514c0 3.107 2.324 5.96 4.861 8.12a29.66 29.66 0 004.566 3.175l.073.041.073-.04c.271-.153.661-.38 1.13-.674.94-.588 2.19-1.441 3.436-2.502 2.537-2.16 4.861-5.013 4.861-8.12C21.5 5.88 19.343 4 17.264 4c-2.106 0-3.801 1.389-4.553 3.643a.75.75 0 01-1.422 0C10.537 5.389 8.841 4 6.736 4zM12 20.703l.343.667a.75.75 0 01-.686 0l.343-.667zM1 8.513C1 5.053 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262a31.146 31.146 0 01-5.233 3.576l-.025.013-.007.003-.002.001-.344-.666-.343.667-.003-.002-.007-.003-.025-.013A29.308 29.308 0 0110 20.408a31.147 31.147 0 01-3.611-2.632C3.8 15.573 1 12.332 1 8.514z">
        </path>
    </svg>
    <span class="heart-point"></span>
    &nbsp
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill-rule="evenodd"
            d="M3.25 4a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h2.5a.75.75 0 01.75.75v3.19l3.72-3.72a.75.75 0 01.53-.22h10a.25.25 0 00.25-.25V4.25a.25.25 0 00-.25-.25H3.25zm-1.75.25c0-.966.784-1.75 1.75-1.75h17.5c.966 0 1.75.784 1.75 1.75v12.5a1.75 1.75 0 01-1.75 1.75h-9.69l-3.573 3.573A1.457 1.457 0 015 21.043V18.5H3.25a1.75 1.75 0 01-1.75-1.75V4.25z">
        </path>
    </svg>
    <span class="comments-number">.</span>
    
</small>
</div>
`;

function timeConverter(UNIX_timestamp) {
  let a = new Date(UNIX_timestamp);
  let year = a.getFullYear();
  let month = a.getMonth() + 1;
  let date = a.getDate();
  var time = year + ". " + month + ". " + date + ".";
  return time;
}
