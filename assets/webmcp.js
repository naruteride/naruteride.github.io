(async () => {
	const modelContext = document.modelContext;
	if (typeof modelContext?.registerTool !== "function") return;

	const normalize = value => value.normalize("NFKC").toLocaleLowerCase("ko");
	const validateInput = (input, allowedKeys) => {
		if (!input || typeof input !== "object" || Array.isArray(input)
			|| Object.keys(input).some(key => !allowedKeys.includes(key))) {
			throw new TypeError("도구 입력은 허용된 속성만 포함하는 객체여야 합니다.");
		}
	};
	const tools = [
		{
			name: "search_posts",
			title: "블로그 글 검색",
			description: "Search this blog's published post titles and descriptions. Whitespace-separated keywords must all match, ignoring case. An empty query lists all posts, newest first. Returns titles, descriptions, dates, and URLs without navigating.",
			inputSchema: {
				type: "object",
				properties: {
					query: { type: "string", maxLength: 200, description: "Keywords to find in post titles and descriptions; omit or leave empty to list all posts." }
				},
				additionalProperties: false
			},
			annotations: { readOnlyHint: true, untrustedContentHint: true },
			execute: async (input = {}, { signal } = {}) => {
				validateInput(input, ["query"]);
				const query = input.query === undefined ? "" : input.query;
				if (typeof query !== "string" || query.length > 200) {
					throw new TypeError("query는 200자 이하의 문자열이어야 합니다.");
				}
				const response = await fetch("/posts.json", { signal });
				if (!response.ok) throw new Error("블로그 글 목록을 불러오지 못했습니다.");
				const posts = await response.json();
				const terms = normalize(query).split(/\s+/).filter(Boolean);
				const matches = posts.filter(post => {
					const text = normalize(`${post.title} ${post.description}`);
					return terms.every(term => text.includes(term));
				}).map(post => ({ ...post, url: new URL(post.url, location.origin).href }));
				return { count: matches.length, posts: matches };
			}
		},
		{
			name: "read_current_page",
			title: "현재 페이지 읽기",
			description: "Read the currently open blog page. Returns its title, description, publication date, visible main text, links, and image descriptions without navigating or changing the page.",
			inputSchema: { type: "object", properties: {}, additionalProperties: false },
			annotations: { readOnlyHint: true, untrustedContentHint: true },
			execute: async (input = {}) => {
				validateInput(input, []);
				const main = document.querySelector("main");
				if (!main) throw new Error("현재 페이지의 본문을 찾을 수 없습니다.");
				return {
					url: new URL(location.pathname, location.origin).href,
					language: document.documentElement.lang,
					title: main.querySelector("h1").innerText,
					description: document.querySelector('meta[name="description"]').content,
					date: main.querySelector("time[datetime]")?.dateTime ?? null,
					text: main.innerText,
					links: Array.from(main.querySelectorAll("a[href]"), link => ({ text: link.innerText, url: link.href })),
					images: Array.from(main.querySelectorAll("img"), image => ({ url: image.src, alt: image.alt }))
				};
			}
		}
	];
	for (const tool of tools) {
		try {
			await modelContext.registerTool(tool);
		} catch (error) {
			console.warn(`WebMCP: ${tool.name} 도구를 등록하지 못했습니다.`, error);
		}
	}
})();
