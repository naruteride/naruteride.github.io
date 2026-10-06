import re
import shutil
from datetime import date
from pathlib import Path
from collections import deque
from html import escape, unescape
from urllib.parse import quote, urlsplit


def inline(text):
	def replace(match):
		code, label, url, strong, emphasis = match.groups()
		if code is not None:
			return f"<code>{code}</code>"
		if url is not None:
			url = unescape(unescape(url))
			if re.search(r"[\x00-\x20\\]", url) or urlsplit(url).scheme not in ("", "http", "https", "mailto"):
				raise ValueError(f"허용하지 않는 링크: {url}")
			return f'<a href="{escape(url, quote=True)}">{inline(unescape(label))}</a>'
		tag = "strong" if strong is not None else "em"
		return f"<{tag}>{inline(unescape(strong or emphasis))}</{tag}>"
	return re.sub(r"`([^`\n]+)`|(?<!!)\[([^\]\n]+)\]\(([^()\s]+)\)|\*\*(.+?)\*\*|\*(.+?)\*", replace, escape(text))


def markdown(text):
	lines = deque(text.splitlines())
	output = []
	def cells(line):
		return [cell.strip() for cell in line.strip().strip("|").split("|")]
	def table(header, rule):
		return "|" in header and all(re.fullmatch(r":?-{3,}:?", cell) for cell in cells(rule))
	while lines:
		line = lines.popleft()
		if not line.strip():
			continue
		heading = re.fullmatch(r"(#{1,6}) +(.+?)(?: +#+)?", line)
		if line.startswith("```"):
			code = []
			while lines and not re.fullmatch(r"```\s*", lines[0]):
				code.append(lines.popleft())
			if lines:
				lines.popleft()
			output.append("<pre><code>" + escape("\n".join(code)) + "</code></pre>")
		elif heading:
			level = max(2, len(heading[1]))
			output.append(f"<h{level}>{inline(heading[2])}</h{level}>")
		elif re.fullmatch(r"(?:-{3,}|\*{3,}|_{3,})\s*", line):
			output.append("<hr>")
		elif lines and table(line, lines[0]):
			headers = cells(line)
			lines.popleft()
			rows = ['<tr>' + ''.join(f'<th scope="col">{inline(cell)}</th>' for cell in headers) + '</tr>']
			while lines and "|" in lines[0]:
				row = cells(lines.popleft())
				if len(row) != len(headers):
					raise ValueError("표의 각 행은 머리글과 셀 개수가 같아야 합니다.")
				rows.append("<tr>" + "".join(f"<td>{inline(cell)}</td>" for cell in row) + "</tr>")
			output.append("<table>" + "\n".join(rows) + "</table>")
		elif re.match(r"[-+*] +", line):
			items = [re.sub(r"^[-+*] +", "", line)]
			while lines and re.match(r"[-+*] +", lines[0]):
				items.append(re.sub(r"^[-+*] +", "", lines.popleft()))
			output.append("<ul>" + "".join(f"<li>{inline(item)}</li>" for item in items) + "</ul>")
		else:
			paragraph = [line]
			while lines and lines[0].strip() and not re.match(r"#{1,6} |```|[-+*] +|(?:-{3,}|\*{3,}|_{3,})\s*$", lines[0]) and not (len(lines) > 1 and table(lines[0], lines[1])):
				paragraph.append(lines.popleft())
			output.append("<p>" + inline("\n".join(paragraph)) + "</p>")
	return "\n".join(output)


def read_document(path):
	text = path.read_text(encoding="utf-8-sig")
	meta = {}
	if text.startswith("---\n"):
		header, text = text[4:].split("\n---\n", 1)
		for key, value in re.findall(r"^(\w+):[ \t]*(.*)$", header, re.M):
			value = value.strip()
			meta[key] = value[1:-1] if len(value) > 1 and value[0] == value[-1] and value[0] in "\"'" else value
	text = text.strip()
	first = re.match(r"# +([^\n]+)(?:\n|$)", text)
	title = meta.get("title") or (first[1] if first else path.stem)
	if first and first[1] == title:
		text = text[first.end():]
	return meta, title, text


def document(title, body):
	return f'''<!doctype html>
<html lang="ko">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{escape(title)} | 방성훈의 기술 블로그</title>
<style>
body {{
	max-inline-size: 72ch;
	margin: auto;
	padding: 1rem;
	line-height: 1.6;
	overflow-wrap: anywhere;
}}
nav {{
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
}}
pre {{
	white-space: pre-wrap;
}}
</style>
<a href="#main">본문 바로가기</a>
<nav><a href="/">홈</a> <a href="/about.html">소개</a></nav>
<main id="main" tabindex="-1">
<h1>{escape(title)}</h1>
{body}
</main>
</html>
'''


def build(root=Path(__file__).resolve().parent):
	pages, posts = {}, []
	for source in sorted(root.glob("*.md")):
		if source.name == "README.md":
			continue
		meta, title, text = read_document(source)
		name = source.with_suffix(".html").name
		published = date.fromisoformat(meta["date"]).isoformat() if meta.get("date") else ""
		stamp = f'<time datetime="{published}">{published}</time>' if published else ""
		if name == "index.html":
			text = re.sub(r"<ul>\s*{% for post in site.posts %}.*?{% endfor %}\s*</ul>", "", text, flags=re.S)
		elif name != "about.html":
			posts.append((published, name, title))
		pages[name] = document(title, stamp + markdown(text))
	items = "".join(f'<li><a href="/{quote(name)}">{escape(title)}</a></li>' for _, name, title in sorted(posts, reverse=True))
	pages["index.html"] = pages["index.html"].replace("</main>", f"<ul>{items}</ul></main>")
	output = root / "site"
	if output.is_symlink():
		raise ValueError("site must not be a symlink")
	if output.exists():
		shutil.rmtree(output)
	output.mkdir()
	for name, html in pages.items():
		(output / name).write_text(html, encoding="utf-8", newline="\n")
	(output / ".nojekyll").touch()
	print(f"{len(pages)} pages → {output}")


if __name__ == "__main__":
	build()
