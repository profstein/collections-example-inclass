---
title: Blog
layout: base.njk
tags: navItem
---

### All Blog Posts

<ul>
  {%- for post in collections.post %}
  <li>
  <a href="{{ post.url }}">
  {{ post.data.title }}
  </a>
  </li>
  {%- endfor %}
</ul>
