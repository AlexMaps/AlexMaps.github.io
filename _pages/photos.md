---
title: "Photos"
permalink: /photos/
toc: true
---

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
  {% assign photos = "001362930008.jpg,001362930011.jpg,001362930013.jpg,001362930016.jpg,001362930028.jpg,001362930029.jpg,001362930031.jpg,001362930036.jpg,001362940001.jpg,001362940004.jpg,001362950003.jpg,001362950006.jpg,001362950007.jpg,001362950008.jpg,001362950017.jpg,001362950020.jpg,001362950022.jpg,001384340014.jpg,001384340016.jpg" | split: "," %}

  {% for photo in photos %}
    <a href="/images/filmphotos/{{ photo }}" target="_blank">
      <img src="/assets/images/filmphotos/{{ photo }}" alt="Film Photo" style="width: 200px; height: auto; border-radius: 5px; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
    </a>
  {% endfor %}
</div>
