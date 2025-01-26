const burgerIcon = document.querySelector('.burger-icon');
const burgerList = document.querySelector('.burger-list');
const burgerOverlay = document.querySelector('.burger-overlay');
const closeButton = document.querySelector('.close');

burgerIcon.addEventListener('click', () => {
  burgerList.classList.toggle('active');
  burgerOverlay.classList.toggle('active');
  burgerIcon.classList.toggle('open');
  burgerIcon.classList.toggle('close');
});

closeButton.addEventListener('click', () => {
  burgerList.classList.remove('active');
  burgerOverlay.classList.remove('active');
  burgerIcon.classList.remove('open');
  burgerIcon.classList.remove('close');
});

burgerOverlay.addEventListener('click', () => {
  burgerList.classList.remove('active');
  burgerOverlay.classList.remove('active');
  burgerIcon.classList.remove('open');
  burgerIcon.classList.remove('close');
});

  document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll('.image-slider .slide');
  let currentIndex = 0;



  
    // Handle carousel functionality
    function updateCarousel() {
      const offset = -currentIndex * 100; // Use percentage instead of pixel for flexible size
      const carouselImages = document.querySelector('.carousel-images');
      if (carouselImages) {
        carouselImages.style.transform = `translateX(${offset}%)`; // Percent-based transformation
      }
  
      dots.forEach(dot => dot.classList.remove('active'));
      if (dots[currentIndex]) {
        dots[currentIndex].classList.add('active');
      }
    }
  
    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel();
    }
  
    function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateCarousel();
    }
  
    function startAutoScroll() {
      if (autoScrollEnabled) {
        interval = setInterval(nextImage, autoScrollInterval);
      }
    }
  
    function stopAutoScroll() {
      clearInterval(interval);
    }
  
    function toggleAutoScroll() {
      autoScrollEnabled = !autoScrollEnabled;
      if (autoScrollEnabled) {
        startAutoScroll();
      } else {
        stopAutoScroll();
      }
    }
  
    if (leftArrow && rightArrow) {
      leftArrow.addEventListener('click', prevImage);
      rightArrow.addEventListener('click', nextImage);
    } else {
      console.error('Arrow elements are missing from the DOM.');
    }
  
    if (dots.length) {
      dots.forEach((dot, index) => {
        dot.addEventListener('mouseover', () => {
          currentIndex = index;
          updateCarousel();
        });
      });
    } else {
      console.error('Dots are missing from the DOM.');
    }
  
    if (autoScrollToggle) {
      autoScrollToggle.addEventListener('click', toggleAutoScroll);
    } else {
      console.error('Auto-scroll toggle is missing from the DOM.');
    }
  
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    });
  
    if (images.length > 0) {
      startAutoScroll();
    } else {
      console.error('Carousel images are missing from the DOM.');
    }
  });
  