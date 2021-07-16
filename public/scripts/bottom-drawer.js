export function bottomDrawerEventInit(
  bottomDrawer,
  drawerSection1,
  drawerSection2,
  knob
) {
  // if (!!window.chrome) {
  //   chromeBugFixer(bottomDrawer, drawerSection1, drawerSection2);
  // }

  knob.addEventListener("click", function () {
    drawerSection2.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}


