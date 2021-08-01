export function bottomDrawerEventInit(bottomDrawer) {
  // 바텀 드로워 돔 정의
  let drawerSection1 = bottomDrawer.querySelector("section:nth-child(1)");
  let drawerSection2 = bottomDrawer.querySelector("section:nth-child(2)");
  let knob = drawerSection1.querySelector(".knob");

  if (!!window.chrome) {
    chromeBugFixer(bottomDrawer, drawerSection1, drawerSection2);
  }

  knob.addEventListener("click", function () {
    drawerSection2.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

// 크롬 스크롤 버그 고치는 함수
function chromeBugFixer(bottomDrawer, drawerSection1, drawerSection2) {
  // 터치 할 때 .pointer-events-auto가 추가되고, 땔 때 지워짐.
  // 섹션 1
  drawerSection1.addEventListener("touchstart", function () {
    bottomDrawer.classList.add("pointer-events-auto");
    console.log("touch start");
  });
  drawerSection1.addEventListener("touchend", function () {
    setTimeout(() => {
      bottomDrawer.classList.remove("pointer-events-auto");
      console.log("touch end");
    }, 600);
  });
  // 섹션 2
  drawerSection2.addEventListener("touchstart", function () {
    bottomDrawer.classList.add("pointer-events-auto");
    console.log("touch start");
  });
  drawerSection2.addEventListener("touchend", function () {
    setTimeout(() => {
      bottomDrawer.classList.remove("pointer-events-auto");
      console.log("touch end");
    }, 600);
  });
}
