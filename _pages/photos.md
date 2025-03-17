---
title: "Photos"
permalink: /photos/
toc: true
---

<style>
  .photo-gallery {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* Exactly 4 columns */
    gap: 5px;
    justify-content: center;
  }
  .photo-gallery img {
    width: 100%; /* Ensures images fully fit their grid space */
    height: auto;
    object-fit: cover;
    border-radius: 5px;
    transition: transform 0.2s;
  }
  .photo-gallery img:hover {
    transform: scale(1.05);
  }

  /* Responsive: Adjust columns for smaller screens */
  @media (max-width: 1024px) {
    .photo-gallery {
      grid-template-columns: repeat(3, 1fr); /* 3 columns on medium screens */
    }
  }

  @media (max-width: 768px) {
    .photo-gallery {
      grid-template-columns: repeat(2, 1fr); /* 2 columns on smaller screens */
    }
  }

  @media (max-width: 480px) {
    .photo-gallery {
      grid-template-columns: repeat(1, 1fr); /* 1 column on mobile */
    }
  }
</style>

<div class="photo-gallery">
  {% assign photos = "001362930008.jpg,001362930011.jpg,001362930013.jpg,001362930016.jpg,001362930028.jpg,001362930029.jpg,001362930031.jpg,001362930036.jpg,001362940001.jpg,001362940004.jpg,001362950003.jpg,001362950006.jpg,001362950007.jpg,001362950008.jpg,001362950017.jpg,001362950020.jpg,001362950022.jpg,001384340014.jpg,001384340016.jpg" | split: "," %}

  {% for photo in photos %}
    <a href="{{ '/images/filmphotos/' | append: photo | relative_url }}" target="_blank">
      <img src="{{ '/images/filmphotos/' | append: photo | relative_url }}" alt="Film Photo">
    </a>
  {% endfor %}
</div>
