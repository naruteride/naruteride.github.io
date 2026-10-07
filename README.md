# 방성훈의 기술 블로그 (공사중)

Python 3.10과 표준 라이브러리만으로 Markdown을 HTML로 만듭니다. 외부 패키지와 브라우저 JavaScript는 사용하지 않습니다.

```sh
python3 build.py
python3 -m http.server --directory site --bind 127.0.0.1 8000
```

루트 디렉토리에서 마크다운 파일을 추가 혹은 수정 후 다시 빌드하고 새로 고칩니다. `site/`는 생성 결과입니다.

이미지는 `assets/`에 저장하면 빌드 시 함께 복사됩니다. 다음 구문을 독립된 문단으로 작성하며, 캡션은 생략할 수 있습니다.

```markdown
![사진 설명](/assets/photo.jpg "캡션")
```

경로에 공백이나 괄호가 있으면 `</assets/사진 (1).jpg>`처럼 감쌉니다.
