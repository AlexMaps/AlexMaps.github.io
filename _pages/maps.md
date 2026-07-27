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

  /* Webmap Container Styling */
  .webmap-container {
    width: 100%;
    margin-bottom: 30px;
  }

  .webmap-iframe {
    width: 100%;
    height: 600px;
    border: none;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }

  /* Photo Gallery Styling */
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
    .webmap-iframe {
      height: 450px; /* Adjust map height for mobile screens */
    }

    .photo-gallery {
      grid-template-columns: repeat(1, 1fr); /* Full width on mobile */
    }
  }
</style>

## Interactive Map

<div class="webmap-container">
  <iframe 
    src="{{ '/assets/LTS_WebMap_GCAT/index.html' | relative_url }}" 
    class="webmap-iframe"
    title="LTS WebMap GCAT">
  </iframe>
</div>

## Static Map Gallery

<div class="photo-gallery-container">
  <div class="photo-gallery">
    {% assign photos = "BorealMapFinal.jpg,Forest2HeathlandPrediction.jpg" | split: "," %}

    {% for photo in photos %}
      <a href="{{ '/images/maps/' | append: photo | relative_url }}" target="_blank">
        <img src="{{ '/images/maps/' | append: photo | relative_url }}" alt="Static Map">
      </a>
    {% endfor %}
  </div>
</div>
