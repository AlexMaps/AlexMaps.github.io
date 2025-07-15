---
title: "Maps"
permalink: /maps/
toc: true
---

<style>
  .sidebar img {
  max-width: 95%; /* Ensures it resizes properly */
  height: auto;
}

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
  column-count: 3;
  column-gap: 10px;
}

.photo-gallery img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 5px;
  margin-bottom: 10px; 
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
    {% assign photos = "MFNmap2.jpg, Forest2HeathlandPrediction.jpg"| split: "," %}

    {% for photo in photos %}
      <a href="{{ '/images/maps/' | append: photo | relative_url }}" target="_blank">
        <img src="{{ '/images/maps/' | append: photo | relative_url }}" alt="Film Photo">
      </a>
    {% endfor %}
  </div>
</div>
