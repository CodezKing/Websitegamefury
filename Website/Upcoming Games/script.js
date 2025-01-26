document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.querySelector('.burger-icon');
  const burgerList = document.querySelector('.burger-list');
  const burgerOverlay = document.querySelector('.burger-overlay');
  const closeButton = document.querySelector('.close');

  if (burgerIcon && burgerList && burgerOverlay && closeButton) {
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
  } else {
    console.error('One or more burger menu elements are missing in the DOM.');
  }
});
