(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu-open-btn'),
    closeMenuBtn: document.querySelector('.menu-close-btn'),
    menu: document.querySelector('.mob-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menu.addEventListener('click', removeMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
  }
  function removeMenu(e) {
    if (e.target === refs.menu) {
      refs.menu.classList.add('is-open');
    }
  }
})();



