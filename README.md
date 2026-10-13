# 방성훈의 기술 블로그 (공사중)

Python 3.10과 표준 라이브러리만으로 Markdown을 HTML로 만듭니다. 외부 패키지는 사용하지 않습니다. WebMCP 지원에만 JavaScript를 사용합니다.

```sh
python3 build.py
python3 -m http.server --directory site --bind 127.0.0.1 8000
```

루트 디렉토리에서 마크다운 파일을 추가 혹은 수정 후 다시 빌드하고 새로 고칩니다. `site/`는 생성 결과입니다.

이미지는 `assets/`에 저장하면 빌드 시 함께 복사됩니다. 다음 구문을 독립된 문단으로 작성하며, 캡션은 생략할 수 있습니다.

```markdown
![사진 설명](/assets/photo.jpg "캡션")
```

경로에 공백이나 괄호가 있으면 `` `</assets/사진 (1).jpg>` ``처럼 감쌉니다.

로컬 JPEG·PNG·GIF 이미지는 빌드 시 실제 크기를 읽어 `width`와 `height`를 지정합니다. 이미지가 로드되기 전에도 공간을 확보하며, 화면 폭에 맞춰 줄여 표시합니다. 외부 URL과 다른 이미지 형식에는 크기를 자동 지정하지 않습니다.

WebMCP는 [2026-10-09 커뮤니티 그룹 초안](https://webmachinelearning.github.io/webmcp/)의 `document.modelContext.registerTool()`을 사용합니다. 아직 정식 W3C 표준은 아닙니다. `assets/webmcp.js`가 각 페이지에서 다음 읽기 전용 도구를 등록합니다.

- `search_posts`: 제목과 `description`에서 공백으로 구분한 검색어를 모두 포함하는 글을 찾습니다. `query`를 생략하거나 비우면 최신순으로 전체 글 목록을 반환합니다.
- `read_current_page`: 현재 페이지의 제목, 설명, 발행일, 본문, 링크와 이미지 대체 텍스트를 반환합니다.

검색 목록인 `posts.json`은 실제 HTML로 빌드되는 게시글에서 생성합니다.
