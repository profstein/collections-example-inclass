---
title: Home
layout: base.njk
tags: navItem
---
# {{title}}

This is the home page. To see all of the blog posts, click Blog in the navigation

## Blog Posts

All of the posts tagged "breeze."


<section class="grid">
{% for post in collections.breeze %}
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