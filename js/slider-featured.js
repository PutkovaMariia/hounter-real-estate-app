document.addEventListener('DOMContentLoaded', function () {
  const sliderContainer = document.querySelector('.featured__slider');
  // Get the track that moves
  const sliderTrack = document.querySelector('.featured__box__elements');
  const btnLeft = document.querySelector('.btn--nav--back');
  const btnRight = document.querySelector('.btn--filled.btn--nav');
  const items = document.querySelectorAll('.featured__box__item');
  const totalItems = items.length;
  let currentIndex = 0;

  // Returns the width of a single slider item plus the gap.
  function getSlideWidth() {
    const item = items[0];
    const width = item.offsetWidth;
    const trackStyle = window.getComputedStyle(sliderTrack);
    const gap = parseFloat(trackStyle.gap) || 0;
    return width + gap;
  }

  // Compute how many full items are visible in the slider container.
  function getVisibleItems() {
    const containerWidth = sliderContainer.offsetWidth;
    const slideWidth = getSlideWidth();
    return Math.floor(containerWidth / slideWidth);
  }

  function updateSlider() {
    const slideWidth = getSlideWidth();
    sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  btnRight.addEventListener('click', function () {
    const visibleItems = getVisibleItems();
    // Maximum index is total items minus visible items.
    const maxIndex = totalItems - visibleItems;
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateSlider();
    }
  });

  btnLeft.addEventListener('click', function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  // On window resize, recalc the visible items and adjust the slider.
  window.addEventListener('resize', function() {
    const visibleItems = getVisibleItems();
    const maxIndex = totalItems - visibleItems;
    // Ensure currentIndex doesn't exceed the maximum allowed index.
    if (currentIndex > maxIndex) {
      currentIndex = maxIndex;
    }
    updateSlider();
  });
});
