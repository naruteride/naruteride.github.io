---
layout: default
---

# 안녕하세요

방성훈의 기술 블로그에 오신 것을 환영합니다. 이곳에서 기술 관련 글을 공유합니다.

## 최근 포스트

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <p>{{ post.excerpt }}</p>
    </li>
  {% endfor %}
</ul> 