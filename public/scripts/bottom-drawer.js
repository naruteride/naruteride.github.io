import { bottomDrawer } from "./index.js";

export function chromeBugFixer() {

	// 크롬일 경우에만 아래 코드를 통해, 바텀드로워 버그 해결
	if (!!window.chrome) {
		let drawerSection1 = bottomDrawer.querySelector("section:nth-child(1)");
		let drawerSection2 = bottomDrawer.querySelector("section:nth-child(2)");

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
}

setTimeout(function () {
	export let knob = bottomDrawer.querySelector(".knob");
	knob.addEventListener("click", function () {
		alert("손잡이 클릭됨!");
	})
}, 5000);