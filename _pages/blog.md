---
layout: page
title: 블로그
permalink: /blog/
description: 블로그 포스트 목록입니다.
nav: true
nav_order: 1
---

<div class="post-list">
  {% for post in site.posts %}
    <div class="post-item">
      <h2 class="post-title">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h2>
      <p class="post-date">{{ post.date | date: "%Y년 %m월 %d일" }}</p>
      <p class="post-description">{{ post.description }}</p>
      <p class="post-tags">
        {% for tag in post.tags %}
          <span class="tag">{{ tag }}</span>
        {% endfor %}
      </p>
    </div>
  {% endfor %}
</div> 