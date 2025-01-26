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



  const slides = document.querySelector('.slides');
  const slideCount = document.querySelectorAll('.slide').length; 
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;
  
  function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
  }
  
  document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slideCount; 
    updateSlider();
  });
  
  document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlider();
  });
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateSlider();
    });
  });
  
  updateSlider();
  