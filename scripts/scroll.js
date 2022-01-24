const scrollFunc = () => {
  const menuLinks = document.querySelectorAll('.header-menu__item a');
  const charLink = document.querySelector('.card-details__link-characteristics');
  const links = [...menuLinks, charLink];

  seamless.polyfill();

  links.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();

      const id = item.getAttribute('href').slice(1);
      const section = document.getElementById(id);

      if (section) {
        // crossbrowser solution, instead of section.scrollIntoView()
        seamless.elementScrollIntoView(section, {
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
};

scrollFunc();
