import {throttle} from "./helpers";

document.addEventListener('DOMContentLoaded', function () {
  const track = document.querySelector('.review__slider__track');
  const dots = document.querySelectorAll('.review__slider__dots__dot');

  function updateSlider(index) {
    let transform;
    if (window.innerWidth < 640) {
      transform = index === 0 ? 'translateX(10%)' :
        index === 1 ? 'translateX(-70%)' : 'translateX(-150%)';
    } else {
      transform = index === 0 ? 'translateX(25%)' :
        index === 1 ? 'translateX(-25%)' : 'translateX(-75%)';
    }
    track.style.transform = transform;

    dots.forEach(dot => dot.classList.remove('review__slider__dots__dot--active'));
    dots[index].classList.add('review__slider__dots__dot--active');
  }

  dots.forEach(dot => {
    dot.addEventListener('click', function () {
      const index = Number(dot.getAttribute('data-index'));
      updateSlider(index);
    });
  });

  const initialIndex = 1;
  updateSlider(initialIndex);

  // Update on resize with throttling
  window.addEventListener(
    'resize',
    throttle(function () {
      const activeIndex = Number(document.querySelector('.review__slider__dots__dot--active').getAttribute('data-index'));
      updateSlider(activeIndex);
    }, 200)
  );
});
