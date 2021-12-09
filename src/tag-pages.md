---
layout: base.njk
pagination:
  data: collections
  size: 1
  alias: tag
  filter:
    - navItem
permalink: /tags/{{ tag }}/
---
# Posts by Tag

## Posts tagged “{{ tag }}”

<ol>
{% set taglist = collections[ tag ] %}
{% for post in taglist | reverse %}
  <li><a href="{{ post.url | url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ol>