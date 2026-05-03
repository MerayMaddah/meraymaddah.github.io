(function () {
  const bg = document.querySelector('.botanical-bg');
  if (!bg) return;

  let ticking = false;

  function updateParallax() {
    const scrollY = window.scrollY || window.pageYOffset;
    // moves at 25% of scroll speed — subtle drift
    bg.style.transform = 'translateY(' + scrollY * 0.25 + 'px)';
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });
})();
