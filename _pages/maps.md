---
title: "Maps"
permalink: /maps/
toc: false
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

  /* Webmap Section Styling */
  .webmap-wrapper {
    width: 100%;
    margin-bottom: 35px;
  }

  .webmap-toolbar {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-bottom: 8px;
  }

  .map-btn {
    display: inline-flex;
    align-items: center;
    padding: 6px 14px;
    font-size: 0.85rem;
    font-weight: 600;
    color: #ffffff !important;
    background-color: #2b2b2b;
    border: none;
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .map-btn:hover {
    background-color: #0073e6;
    text-decoration: none;
  }

  .webmap-iframe {
    width: 100%;
    height: 650px;
    border: none;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }

  /* Photo Gallery Styling */
  .photo-gallery-container {
    width: 100%;
    max-width: none;
    margin: auto;
    padding: 10px 0;
  }

  .photo-gallery {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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
    transform: scale(1.03);
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .webmap-iframe {
      height: 450px;
    }

    .photo-gallery {
      grid-template-columns: repeat(1, 1fr);
    }

    .webmap-toolbar {
      flex-direction: column;
      align-items: stretch;
    }

    .map-btn {
      text-align: center;
      justify-content: center;
    }
  }
</style>

## Webmaps
<div class="webmap-wrapper">
  <div class="webmap-toolbar">
    <button type="button" class="map-btn" onclick="openMapFullscreen()">
      <span>⤢ Full Screen</span>
    </button>
    <a href="{{ '/assets/LTS_WebMap_GCAT/index.html' | relative_url }}" target="_blank" class="map-btn">
      <span>↗ Open in New Tab</span>
    </a>
  </div>

  <iframe 
    id="leaflet-map-frame"
    src="{{ '/assets/LTS_WebMap_GCAT/index.html' | relative_url }}" 
    class="webmap-iframe"
    title="LTS WebMap GCAT"
    allowfullscreen="true"
    webkitallowfullscreen="true"
    mozallowfullscreen="true">
  </iframe>
</div>

<script>
  function openMapFullscreen() {
    var mapFrame = document.getElementById("leaflet-map-frame");
    if (mapFrame.requestFullscreen) {
      mapFrame.requestFullscreen();
    } else if (mapFrame.webkitRequestFullscreen) { /* Safari */
      mapFrame.webkitRequestFullscreen();
    } else if (mapFrame.msRequestFullscreen) { /* IE11 */
      mapFrame.msRequestFullscreen();
    }
  }
</script>

## Thesis Maps
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
