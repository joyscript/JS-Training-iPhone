const accordion = () => {
  const items = document.querySelectorAll('.characteristics__item');

  const closeItem = () => {
    const activeButton = document.querySelector('.characteristics__title.active');
    const openContent = document.querySelector('.characteristics__description.open');

    if (openContent) {
      openContent.style.height = '';
      openContent.classList.remove('open');
    }

    if (activeButton) activeButton.classList.remove('active');
  };

  items.forEach((item, ind) => {
    const button = item.querySelector('.characteristics__title');
    const content = item.querySelector('.characteristics__description');

    item.addEventListener('click', () => {
      if (content.classList.contains('open')) {
        content.style.height = '';
      } else {
        closeItem();
        content.style.height = content.scrollHeight + 'px';
      }

      button.classList.toggle('active');
      content.classList.toggle('open');
    });
  });
};

accordion();
