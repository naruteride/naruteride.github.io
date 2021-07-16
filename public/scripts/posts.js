export function postsEventsInit(bottomDrawer, postHtml) {
  let posts = bottomDrawer.querySelectorAll(".list-group>a");
  for (post of posts) {
    post.addEventListener("click", function () {
			window.location.href = window.location.href + "#post";

		});
  }
}
