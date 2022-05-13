---
title: Blog
layout: base.njk
tags: navItem
---
## My Blog

<section class="grid">
{% for post in collections.post %}
<article class="card">
    <div class="card__img"><img src="{{ post.data.postImg | url }}" alt="{{ post.data.postImgAlt}}"></div>
      <div class="card__content">
        <h1 class="card__header">{{ post.data.title }}</h1>
        <p class="card__text">{{ post.data.description }}</p>
        <a href="{{ post.url }}"> <button class="card__btn">Explore <span>&rarr;</span></button></a>
      </div>
    </article>
    {% endfor %}
</section>

### All Blog Posts

<ul>
  {%- for post in collections.post %}
  <li>
    <a href="{{ post.url }}"> {{ post.data.title }}</a>
  </li>
  {%- endfor %}
</ul>
