function init() {

  const masthead = document.querySelector('.masthead');
  const toTop = document.querySelector('.to-top');


  function stickyNav() {
    if (window.scrollY > 50) {
      masthead && masthead.classList.add('sticky');
      toTop && toTop.classList.add('visible');
    } else {
      masthead && masthead.classList.remove('sticky');
      toTop && toTop.classList.remove('visible');
    }
  }

  stickyNav();

  window.addEventListener('scroll', stickyNav);
  
  }

document.addEventListener('DOMContentLoaded', init);
