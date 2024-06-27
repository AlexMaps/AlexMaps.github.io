---
permalink: /
title: "Welcome to my Portfolio"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

My name is Alexander Johnston, I am a Master's student at the University of Guelph in the Geography Department. My research is on mapping of heathland habitats and disturbance histories within the Miawpukek First Nations (MFN) Traditional Territory. My primary research objectives are to develop a model to classify heathlands in MFN Traditional Territory and to explore the relationship between historic disturbances and comtempoary heathland distribution. 


Current Projects
======
I am currently building a Random Forest model to heathlands in MFN Traditional Territory. This summer I will be gathering ground truth poitns for validation and calibration of my model. In addition to heathland detection my research seeks to explore the factors influencing primary succession of heathlands at the landscape level—a dimension that has not been extensively studied.

Past Projects
======
**Comparing Pixel and Object-Based Classification of Heathland in Central Newfoundland using Random Forest Classifier**

**Comparing Sentinel 2, SAR and Terrain Data Composites for Heathland Classification in Conne River using Random Forest Classifier**
<div class="image-container align-right">
  <div style="position: relative;">
    <img src="/images/Gif1.PNG" class="fading-image" alt="Frame 1">
    <img src="/images/Gif2.PNG" class="fading-image" alt="Frame 2">
    <img src="/images/Legend.PNG" class="legend-image" alt="Legend">
</div>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.fading-image');
    let currentIndex = 0;

    function showNextImage() {
      // Fade out the current image
      const currentImage = images[currentIndex];
      currentImage.style.opacity = 0;

      // Move to the next image index
      currentIndex = (currentIndex + 1) % images.length;

      // Fade in the next image after a short delay
      const nextImage = images[currentIndex];
      nextImage.style.opacity = 1;

      // Call the function recursively after a delay
      setTimeout(showNextImage, 2000); // Adjust the interval as needed (2000ms = 2 seconds)
    }

    // Start the image fading loop
    showNextImage();
  });
</script>

**Impacts of Potential Rail Crossing Closures on Active Transportation in Guelph, Ontario**

<link rel="stylesheet" type="text/css" href="/styles.css">
