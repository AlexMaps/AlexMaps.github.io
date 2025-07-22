---
title: "Maps"
permalink: /maps/
toc: true
---

<style>
  .sidebar img {
    max-width: 95%;
    height: auto;
  }

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
    grid-template-columns: repeat(2, 1fr); /* Show 2 large images per row */
    gap: 20px;
  }

  .photo-gallery img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 5px;
    transition: transform 0.3s ease;
  }

  .photo-gallery img:hover {
    transform: scale(1.05);
  }

  /* Responsive Design */
  @media (max-width: 1200px) {
    .photo-gallery {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .photo-gallery {
      grid-template-columns: repeat(1, 1fr); /* Full width on mobile */
    }
  }
</style>

<div class="photo-gallery-container">
  <div class="photo-gallery">
    {% assign photos = "BorealMapFinal.jpg,Forest2HeathlandPrediction.jpg"| split: "," %}

    {% for photo in photos %}
      <a href="{{ '/images/maps/' | append: photo | relative_url }}" target="_blank">
        <img src="{{ '/images/maps/' | append: photo | relative_url }}" alt="Missing Map">
      </a>
    {% endfor %}
  </div>
</div>
