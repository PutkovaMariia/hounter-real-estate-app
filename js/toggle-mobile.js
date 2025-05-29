document.addEventListener('DOMContentLoaded', () => {
  const burgerButton = document.querySelector('.header__burger');
  const mobileMenu = document.querySelector('.header__mobile-menu');

  // Toggle menu visibility and icon transformation on burger click
  burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  // Close the menu if the user clicks outside the menu
  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !burgerButton.contains(e.target)) {
      mobileMenu.classList.remove('active');
      burgerButton.classList.remove('active');
    }
  });
});
