---
title: "Photos"
permalink: /photos/
toc: true
---

{% assign photos = site.static_files | where: "path", "images/filmphotos" %}

{% for photo in photos %}
  <img src="{{ photo.path | relative_url }}" alt="Photo" style="max-width: 300px; margin: 10px;">
{% endfor %}
