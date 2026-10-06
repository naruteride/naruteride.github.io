# 방성훈의 기술 블로그 (공사중)

Python 3.10과 표준 라이브러리만으로 Markdown을 HTML로 만듭니다. 외부 패키지와 브라우저 JavaScript는 사용하지 않습니다.

```sh
python3 build.py
python3 -m http.server --directory site --bind 127.0.0.1 8000
```

루트 디렉토리에서 마크다운 파일을 추가 혹은 수정 후 다시 빌드하고 새로 고칩니다. `site/`는 생성 결과입니다.