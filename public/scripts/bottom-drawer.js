import { bottomDrawer, drawerSection1, drawerSection2, knob } from "./index.js";

function chromeBugFixer() {
  // 터치 할 때 .pointer-events-auto가 추가되고 땔 때 지워짐.
  // 섹션 1
  drawerSection1.addEventListener("touchstart", function () {
    bottomDrawer.classList.add("pointer-events-auto");
    console.log("touch start");
  });
  drawerSection1.addEventListener("touchend", function () {
    setTimeout(() => {
      bottomDrawer.classList.remove("pointer-events-auto");
      console.log("touch end");
    }, 500);
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
    }, 500);
  });
}

export function bottomDrawerInit() {
  knob.addEventListener("click", function () {
    alert("손잡이 클릭됨!");
  });

  chromeBugFixer();
}
