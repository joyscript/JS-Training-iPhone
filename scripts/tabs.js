const tabsFunc = () => {
  const tabs = document.querySelectorAll('.card-detail__change');
  const tabsTitle = document.querySelector('.card-details__title');
  const tabsPrice = document.querySelector('.card-details__price');
  const tabsImage = document.querySelector('.card__image_item');

  const tabsOptions = [
    {
      name: 'Graphite',
      memory: '128',
      price: 60000,
      image: 'img/iPhone-graphite.webp',
    },
    {
      name: 'Silver',
      memory: '256',
      price: 65000,
      image: 'img/iPhone-silver.webp',
    },
    {
      name: 'Sierra Blue',
      memory: '512',
      price: 70000,
      image: 'img/iPhone-sierra_blue.webp',
    },
  ];

  const changeContent = (ind) => {
    tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[ind].memory}GB ${tabsOptions[ind].name}`;
    tabsPrice.textContent = `${tabsOptions[ind].price}₽`;

    tabsImage.setAttribute('src', `${tabsOptions[ind].image}`);

    document.title = `iPhone 13 Pro ${tabsOptions[ind].memory}GB ${tabsOptions[ind].name}`;
  };

  const changeActiveTab = (curInd) => {
    tabs.forEach((tab, ind) => {
      tab.classList.remove('active');
      if (curInd === ind) tab.classList.add('active');
    });
  };

  tabs.forEach((tab, curInd) => {
    tab.addEventListener('click', () => {
      changeActiveTab(curInd);
      changeContent(curInd);
    });
  });

  changeContent(0);
};

tabsFunc();
