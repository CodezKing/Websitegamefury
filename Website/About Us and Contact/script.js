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
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');  
      } else {
        slide.classList.remove('active'); 
      }
    });
  }


  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; 
    showSlide(currentIndex);
  }


  setInterval(nextSlide, 3000); 
  showSlide(currentIndex);  
});

