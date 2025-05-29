import {debounce} from './helpers'

window.addEventListener('scroll', debounce(function () {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.style.backgroundColor = 'rgba(136, 139, 151, 0.4)';
    header.style.backdropFilter = 'blur(5px)';
  } else {
    header.style.backgroundColor = 'transparent';
    header.style.backdropFilter = 'blur(0px)';
  }
}, 20));
