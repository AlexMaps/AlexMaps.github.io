---
title: "Photos"
permalink: /photos/
toc: true
---

<style>
  /* Ensure the page content is constrained */
  .page-content {
    width: 100%;
    max-width: none;
    padding: 0;
    margin: 0;
  }

  .photo-gallery-container {
    width: 100%;
    max-width: none;
    margin: auto;
    padding: 10px;
  }

  .photo-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Increase min size */
  gap: 5px;
}
  .photo-gallery img {
  width: 100%;
  max-height: 250px; /* Prevents excessive upscaling */
  object-fit: contain;
  border-radius: 5px;
  transition: transform 0.2s;
}
  
  .photo-gallery img:hover {
    transform: scale(1.05);
  }

  /* Responsive Design */
  @media (max-width: 1200px) {
    .photo-gallery {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 768px) {
    .photo-gallery {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 480px) {
    .photo-gallery {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>

<div class="photo-gallery-container">
  <div class="photo-gallery">
    {% assign photos = "TicklePoint.JPG,TerraNova.JPG,SalmonAccess.JPG,001362930008.jpg,001362930011.jpg,001362930013.jpg,001362930016.jpg,001362930028.jpg,001362930029.jpg,001362930031.jpg,001362930036.jpg,001362940001.jpg,001362940004.jpg,001362950003.jpg,001362950006.jpg,001362950007.jpg,001362950008.jpg,001362950017.jpg,001362950020.jpg,001362950022.jpg,001384340014.jpg,001384340016.jpg"| split: "," %}

    {% for photo in photos %}
      <a href="{{ '/images/filmphotos/' | append: photo | relative_url }}" target="_blank">
        <img src="{{ '/images/filmphotos/' | append: photo | relative_url }}" alt="Film Photo">
      </a>
    {% endfor %}
  </div>
</div>
