# 방성훈의 기술 블로그

이 저장소는 GitHub Pages로 호스팅되는 개인 기술 블로그입니다. Jekyll과 minimal 테마를 사용하여 만들어졌습니다.

## 로컬에서 실행하기

1. Ruby 설치 (https://www.ruby-lang.org/ko/documentation/installation/)
2. Jekyll과 Bundler 설치:
   ```
   gem install jekyll bundler
   ```
3. 저장소 클론:
   ```
   git clone https://github.com/naruteride/naruteride.github.io.git
   cd naruteride.github.io
   ```
4. 의존성 설치:
   ```
   bundle install
   ```
5. 로컬 서버 실행:
   ```
   bundle exec jekyll serve
   ```
6. 브라우저에서 `http://localhost:4000` 접속

## 새 포스트 작성하기

`_posts` 디렉토리에 `YYYY-MM-DD-제목.md` 형식으로 파일을 생성하고 다음 YAML 헤더를 추가합니다:

```yaml
---
layout: post
title: "포스트 제목"
date: YYYY-MM-DD
categories: 카테고리
---
```

그 아래에 마크다운 형식으로 내용을 작성하면 됩니다.