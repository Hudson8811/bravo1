document.addEventListener('DOMContentLoaded', function() {
  const body = document.body;
  const preloader = document.getElementById('preloader');

  // Блокируем прокрутку на начальном этапе
  body.style.overflow = 'hidden';

  // После полной загрузки страницы
  window.addEventListener('load', function() {

    setTimeout(() => {
      preloader.classList.add('hidden');
    }, 1000); // Время совпадает с анимацией fade-out

    // Восстанавливаем прокрутку после задержки скрытия прелоадера
    setTimeout(() => {
      body.style.overflow = '';
    }, 1000);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("header-menu-btn");
  const menu = document.getElementById("header-menu");
  const menuContent = document.getElementById("header-menu-content");

  // SVG-код для разных состояний
  const svgDefault = `
    <svg width="23" height="12" viewBox="0 0 23 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="0.966406" x2="16" y2="0.966406" stroke="black" stroke-width="1.2"/>
      <line y1="5.96641" x2="11" y2="5.96641" stroke="black" stroke-width="1.2"/>
      <line y1="10.9664" x2="16" y2="10.9664" stroke="black" stroke-width="1.2"/>
    </svg>
  `;

  const svgActive = `
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="0.8189" y1="12.8423" x2="12.5647" y2="1.09651" stroke="black" stroke-width="1.2"/>
    <line x1="12.565" y1="13.1801" x2="0.819165" y2="1.43429" stroke="black" stroke-width="1.2"/>
    </svg>
  `;

  // Функция для переключения меню и иконки
  function toggleMenu() {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
    menuBtn.innerHTML = `Меню ${menu.classList.contains("active") ? svgActive : svgDefault}`;
  }

  // Обработчик нажатия на кнопку
  menuBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleMenu();
  });

  // Обработчик клика вне меню
  document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !menuBtn.contains(event.target) && menu.classList.contains("active")) {
      menu.classList.remove("active");
      menuBtn.classList.remove("active");
      menuBtn.innerHTML = `Меню ${svgDefault}`;
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const objectBtns = document.querySelectorAll('.object-btn');
  const objectLists = document.querySelectorAll('.header__content-nav__list-item .object-list');

  // Функция переключения класса active
  function toggleActive(button, list) {
      list.classList.toggle('active');
      button.classList.toggle('active');
  }

  // Функция добавления класса active
  function addActive(button, list) {
      list.classList.add('active');
      button.classList.add('active');
  }

  // Функция удаления класса active
  function removeActive(button, list) {
      list.classList.remove('active');
      button.classList.remove('active');
  }

  // Проверка ширины экрана
  function isMobileScreen() {
      return window.innerWidth <= 768;
  }

  // Добавление обработчиков событий для всех кнопок
  function updateEventListeners() {
      objectBtns.forEach((button, index) => {
          const list = objectLists[index]; // предполагается, что порядок кнопок и списков совпадает

          if (isMobileScreen()) {
              // На мобильных устройствах добавляем класс по клику
              button.addEventListener('click', function(event) {
                  event.stopPropagation(); // Останавливаем всплытие события
                  toggleActive(button, list);
              });
              button.removeEventListener('mouseenter', function() { addActive(button, list); });
          } else {
              // На десктопах добавляем класс по наведению
              button.removeEventListener('click', function(event) {
                  event.stopPropagation(); // Останавливаем всплытие события
                  toggleActive(button, list);
              });
              button.addEventListener('mouseenter', function() { addActive(button, list); });
          }
      });
  }

  // Удаление класса active при клике вне блока object-list
  document.addEventListener('click', function (event) {
      objectLists.forEach((list, index) => {
          const button = objectBtns[index];
          if (!list.contains(event.target) && !button.contains(event.target)) {
              removeActive(button, list);
          }
      });
  });

  // Удаление класса active, если курсор покинул блок object-list
  objectLists.forEach((list, index) => {
      const button = objectBtns[index];
      list.addEventListener('mouseleave', function() {
          removeActive(button, list);
      });
  });

  // Добавляем или обновляем обработчики событий при загрузке и изменении размера экрана
  updateEventListeners();
  window.addEventListener('resize', updateEventListeners);
});

document.addEventListener("DOMContentLoaded", function() {
  const openButton = document.getElementById("header-mobile-menu-open");
  const closeButton = document.getElementById("header-mobile-menu-close");
  const header = document.getElementById("header"); // Блок header
  const headerContent = document.getElementById("header-content");
  const body = document.body;

  function toggleActiveClass(add) {
      if (add) {
          header.classList.add("active"); // Добавляем класс active к header
          headerContent.classList.add("active");
          body.style.overflow = "hidden"; // Отключаем скролл для body
      } else {
          header.classList.remove("active"); // Убираем класс active у header
          headerContent.classList.remove("active");
          body.style.overflow = ""; // Возвращаем прокрутку для body
      }
  }

  // Проверка ширины экрана
  function checkScreenWidth() {
      return window.innerWidth <= 768;
  }

  // Назначение обработчиков клика, если ширина экрана <= 768px
  function setEventListeners() {
      if (checkScreenWidth()) {
          openButton.addEventListener("click", () => toggleActiveClass(true));
          closeButton.addEventListener("click", () => toggleActiveClass(false));
      } else {
          // Удаление классов active и восстановление прокрутки, если ширина экрана больше 768px
          header.classList.remove("active");
          headerContent.classList.remove("active");
          body.style.overflow = ""; // Возвращаем прокрутку для body
      }
  }

  // Пересчёт при изменении размера окна
  window.addEventListener("resize", setEventListeners);

  // Первоначальная установка обработчиков
  setEventListeners();
});


/* footer - открытие меню с объектами */
document.addEventListener('DOMContentLoaded', function () {
  const objectBtns = document.querySelectorAll('.footer-object-btn');
  const objectLists = document.querySelectorAll('.footer__content-top__nav-list__item .object-list');

  // Функция переключения класса active
  function toggleActive(button, list) {
      list.classList.toggle('active');
      button.classList.toggle('active');
  }

  // Функция добавления класса active
  function addActive(button, list) {
      list.classList.add('active');
      button.classList.add('active');
  }

  // Функция удаления класса active
  function removeActive(button, list) {
      list.classList.remove('active');
      button.classList.remove('active');
  }

  // Проверка ширины экрана
  function isMobileScreen() {
      return window.innerWidth <= 768;
  }

  // Добавление обработчиков событий для всех кнопок
  function updateEventListeners() {
      objectBtns.forEach((button, index) => {
          const list = objectLists[index]; // предполагается, что порядок кнопок и списков совпадает

          if (isMobileScreen()) {
              // На мобильных устройствах добавляем класс по клику
              button.addEventListener('click', function(event) {
                  event.stopPropagation(); // Останавливаем всплытие события
                  toggleActive(button, list);
              });
              button.removeEventListener('mouseenter', function() { addActive(button, list); });
          } else {
              // На десктопах добавляем класс по наведению
              button.removeEventListener('click', function(event) {
                  event.stopPropagation(); // Останавливаем всплытие события
                  toggleActive(button, list);
              });
              button.addEventListener('mouseenter', function() { addActive(button, list); });
          }
      });
  }

  // Удаление класса active при клике вне блока object-list
  document.addEventListener('click', function (event) {
      objectLists.forEach((list, index) => {
          const button = objectBtns[index];
          if (!list.contains(event.target) && !button.contains(event.target)) {
              removeActive(button, list);
          }
      });
  });

  // Удаление класса active, если курсор покинул блок object-list
  objectLists.forEach((list, index) => {
      const button = objectBtns[index];
      list.addEventListener('mouseleave', function() {
          removeActive(button, list);
      });
  });

  // Добавляем или обновляем обработчики событий при загрузке и изменении размера экрана
  updateEventListeners();
  window.addEventListener('resize', updateEventListeners);
});


document.addEventListener("DOMContentLoaded", function() {
  const popUp = document.querySelector(".pop-up-callback");
  const closeButton = document.getElementById("pop-up-callback-close");

  function openPopUp() {
    popUp.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closePopUp() {
    popUp.classList.remove("active");
    document.body.style.overflow = "";
  }

  document.getElementById("pop-up-callback-open").addEventListener("click", openPopUp);

  closeButton.addEventListener("click", closePopUp);

  const openButtons = document.querySelectorAll(".pop-up-callback-open");
  openButtons.forEach(button => button.addEventListener("click", openPopUp));
});

document.addEventListener('DOMContentLoaded', () => {
  // Инициализация слайдера
  function initializeSlider(block) {
    const minInput = block.querySelector('.min-input');
    const maxInput = block.querySelector('.max-input');
    const minSlider = block.querySelector('.min-slider');
    const maxSlider = block.querySelector('.max-slider');
    const track = block.querySelector('.slider__blocks-container__track');
    const minPrice = parseInt(block.querySelector('.slider__blocks-container').dataset.minPrice);
    const maxPrice = parseInt(block.querySelector('.slider__blocks-container').dataset.maxPrice);
    const minGap = 1;

    function updateTrack() {
      const percentMin = ((minSlider.value - minPrice) / (maxPrice - minPrice)) * 100;
      const percentMax = ((maxSlider.value - minPrice) / (maxPrice - minPrice)) * 100;
      track.style.left = `${percentMin}%`;
      track.style.right = `${100 - percentMax}%`;
    }

    function syncSliders() {
      if (maxSlider.value - minSlider.value < minGap) {
        if (this === minSlider) minSlider.value = maxSlider.value - minGap;
        else maxSlider.value = minSlider.value + minGap;
      }
      minInput.value = minSlider.value;
      maxInput.value = maxSlider.value;
      updateTrack();
    }

    function syncInputs() {
      let minValue = parseInt(minInput.value) || minPrice;
      let maxValue = parseInt(maxInput.value) || maxPrice;

      if (minValue < minPrice) minValue = minPrice;
      if (minValue > maxSlider.value - minGap) minValue = maxSlider.value - minGap;

      if (maxValue > maxPrice) maxValue = maxPrice;
      if (maxValue < minSlider.value + minGap) maxValue = minSlider.value + minGap;

      minSlider.value = minValue;
      maxSlider.value = maxValue;
      updateTrack();
    }

    minSlider.addEventListener('input', syncSliders);
    maxSlider.addEventListener('input', syncSliders);
    minInput.addEventListener('input', syncInputs);
    maxInput.addEventListener('input', syncInputs);
    updateTrack();
  }

  // Инициализация селектов
  function initializeSelect(select) {
    const selectDescr = select.querySelector('.select-descr');
    const choices = select.querySelectorAll('.select-blocks__choise');

    select.addEventListener('click', (event) => {
      if (!event.target.closest('.select-blocks__choise')) {
        document.querySelectorAll('.filter__content-blocks__fields-block.select.active')
          .forEach(s => s.classList.remove('active'));
        select.classList.toggle('active');
      }
    });

    choices.forEach(choice => {
      choice.addEventListener('click', () => {
        selectDescr.textContent = choice.textContent;
        select.classList.remove('active');
      });
    });
  }

  // Инициализация кнопки "Ещё"
  function initializeShowMore(labels, button, visibleCount) {
    let allLabelsVisible = false;

    function updateLabels() {
      labels.forEach((label, index) => label.style.display = allLabelsVisible || index < visibleCount ? 'block' : 'none');
      button.textContent = allLabelsVisible
        ? 'Скрыть'
        : `Ещё ${labels.length - visibleCount} преимуществ`;
    }

    button.addEventListener('click', () => {
      allLabelsVisible = !allLabelsVisible;
      updateLabels();
    });

    updateLabels();
  }

  // Инициализация кнопки сброса
  function initializeResetButton(resetButton, sliders, numberInputs, checkboxes, selectDescriptions, selectChoices) {
    resetButton.addEventListener('click', () => {
      checkboxes.forEach(checkbox => checkbox.checked = false);
      sliders.forEach(slider => {
        slider.value = slider.getAttribute('min');
        slider.dispatchEvent(new Event('input'));
      });
      numberInputs.forEach(input => input.value = input.getAttribute('value'));
      selectDescriptions.forEach(desc => desc.textContent = 'Любой');
      selectChoices.forEach(choice => choice.classList.toggle('selected', choice.textContent.trim() === 'Любой'));
    });
  }

  // Инициализация кнопки раскрытия фильтра
  function initializeExpandButton(expandButton, filterBtns) {
    expandButton.addEventListener('click', () => {
      filterBtns.classList.toggle('active');
      expandButton.classList.toggle('active');
    });
  }

  // Основная инициализация
  const sliderBlocks = document.querySelectorAll('.slider__blocks');
  sliderBlocks.forEach(initializeSlider);

  const selectBlocks = document.querySelectorAll('.filter__content-blocks__fields-block.select');
  selectBlocks.forEach(initializeSelect);

  const labels = document.querySelectorAll('.filter__content-blocks__btns-label');
  const showMoreButton = document.querySelector('.show-more');
  initializeShowMore(labels, showMoreButton, 5);

  const resetButton = document.querySelector('.resetting-filter');
  const sliders = document.querySelectorAll('input[type="range"]');
  const numberInputs = document.querySelectorAll('input[type="number"]');
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const selectDescriptions = document.querySelectorAll('.select-descr');
  const selectChoices = document.querySelectorAll('.select-blocks__choise');
  initializeResetButton(resetButton, sliders, numberInputs, checkboxes, selectDescriptions, selectChoices);

  const filterBtns = document.querySelector('.filter__content-blocks__btns');
  const expandButton = document.querySelector('.expand-filter');
  initializeExpandButton(expandButton, filterBtns);
});





/* Главная */
document.addEventListener('DOMContentLoaded', () => {
  const blocksContainer = document.querySelector('.index-hero__content-scroll__blocks');
  const blocks = Array.from(document.querySelectorAll('.index-hero__content-scroll__blocks-block'));
  const paginations = Array.from(document.querySelectorAll('.index-hero__content-scroll__controll-paginations span'));
  const btnPrev = document.getElementById('index-scroll-prev');
  const btnNext = document.getElementById('index-scroll-next');

  let currentIndex = 0;
  let blockWidth = blocks[0].offsetWidth;
  let blockMarginRight = parseFloat(window.getComputedStyle(blocks[0]).marginRight);
  let startX = 0;
  let endX = 0;

  // Функция для плавного ускорения и замедления (ease in-out quad)
  const easeInOutQuad = (t) => {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  };

  function updatePagination() {
    paginations.forEach((pagination, index) => {
      pagination.classList.toggle('active', index === currentIndex);
    });
  }

  function updateDimensions() {
    blockWidth = blocks[0].offsetWidth;
    blockMarginRight = parseFloat(window.getComputedStyle(blocks[0]).marginRight);
    updateBlockPosition(0); // Обновляем позицию без анимации при изменении размера окна
  }

  // Анимация перехода с использованием easeInOutQuad
  function animateScroll(targetOffset) {
    const start = parseFloat(window.getComputedStyle(blocksContainer).transform.split(',')[4]) || 0; // Текущая позиция
    const distance = targetOffset - start;
    const duration = 500; // Длительность анимации в мс
    let startTime = null;

    function animationStep(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1); // Время, прошедшее с начала анимации
      const easedProgress = easeInOutQuad(progress); // Применение easing функции для плавности

      blocksContainer.style.transform = `translateX(${start + distance * easedProgress}px)`; // Сдвиг контейнера

      if (progress < 1) {
        requestAnimationFrame(animationStep); // Запрашиваем следующее кадро анимации
      }
    }

    requestAnimationFrame(animationStep); // Запуск анимации
  }

  function updateBlockPosition() {
    const targetOffset = -(blockWidth + blockMarginRight) * currentIndex;
    animateScroll(targetOffset);
  }

  btnPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateBlockPosition();
      updatePagination();
    }
  });

  btnNext.addEventListener('click', () => {
    if (currentIndex < blocks.length - 1) {
      currentIndex++;
      updateBlockPosition();
      updatePagination();
    }
  });

  // Обработчики для свайпа
  blocksContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX; // Начальная позиция пальца
  });

  blocksContainer.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX; // Конечная позиция пальца
  });

  blocksContainer.addEventListener('touchend', () => {
    const swipeDistance = startX - endX; // Расстояние свайпа
    if (Math.abs(swipeDistance) > 50) { // Если свайп достаточно длинный
      if (swipeDistance > 0) {
        // Свайп влево (вперед)
        if (currentIndex < blocks.length - 1) {
          currentIndex++;
        }
      } else {
        // Свайп вправо (назад)
        if (currentIndex > 0) {
          currentIndex--;
        }
      }
      updateBlockPosition();
      updatePagination();
    }
  });

  window.addEventListener('resize', updateDimensions);

  updatePagination();
});

document.addEventListener("DOMContentLoaded", () => {
  const productLists = document.querySelectorAll('.scroll-list'); // Находим все элементы с этим классом
  const maxScrollStep = 40; // Максимальная длина шага прокрутки

  // Функция плавного скроллинга для одного элемента
  function startSmoothScroll(container, targetScrollPosition) {
    let isScrolling = false;
    let animationFrameId;

    function smoothScrollStep() {
      const currentScrollPosition = container.scrollLeft;
      const difference = targetScrollPosition - currentScrollPosition;

      if (Math.abs(difference) > 1) {
        const scrollStep = Math.sign(difference) * Math.min(maxScrollStep, Math.abs(difference));
        container.scrollLeft += scrollStep;
        animationFrameId = requestAnimationFrame(smoothScrollStep);
      } else {
        isScrolling = false;
        container.scrollLeft = targetScrollPosition;
        cancelAnimationFrame(animationFrameId);
      }
    }

    if (!isScrolling) {
      isScrolling = true;
      animationFrameId = requestAnimationFrame(smoothScrollStep);
    }
  }

  // Проверка переполнения контейнера
  function isOverflowing(container) {
    return container.scrollWidth > container.clientWidth;
  }

  // Добавление обработчиков событий для всех контейнеров
  productLists.forEach((container) => {
    let targetScrollPosition = 0;

    // Обработчик колеса мыши
    container.addEventListener('wheel', (event) => {
      if (isOverflowing(container)) {
        event.preventDefault();
        targetScrollPosition += event.deltaY;
        targetScrollPosition = Math.max(
          0,
          Math.min(targetScrollPosition, container.scrollWidth - container.clientWidth)
        );
        startSmoothScroll(container, targetScrollPosition);
      }
    });

    // Обработчик для свайпа на мобильных устройствах
    let startX;

    container.addEventListener('touchstart', (event) => {
      if (isOverflowing(container)) {
        startX = event.touches[0].clientX;
        cancelAnimationFrame(animationFrameId); // Останавливаем предыдущее движение
      }
    });

    container.addEventListener('touchmove', (event) => {
      if (isOverflowing(container) && startX) {
        const touchX = event.touches[0].clientX;
        const scrollDelta = startX - touchX;
        targetScrollPosition += scrollDelta;
        targetScrollPosition = Math.max(
          0,
          Math.min(targetScrollPosition, container.scrollWidth - container.clientWidth)
        );
        startX = touchX;
        startSmoothScroll(container, targetScrollPosition);
      }
    });

    container.addEventListener('touchend', () => {
      startX = null;
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const facilities = document.querySelectorAll('.index-ourFacilities__content-info');

  // Функция для десктопа
  const handleFacilitiesDesktop = () => {
    facilities.forEach(facility => {
      const img = facility.querySelector('.index-ourFacilities__content-info__img');
      const articleTop = facility.querySelector('.index-ourFacilities__content-info__article-top');
      const articleBottom = facility.querySelector('.index-ourFacilities__content-info__article-bottom');
      const button = facility.querySelector('.index-ourFacilities__content-info__btn');

      const calculateHeight = () => {
        const facilityStyles = getComputedStyle(facility);
        const paddingTop = parseFloat(facilityStyles.paddingTop);
        const paddingBottom = parseFloat(facilityStyles.paddingBottom);

        const imgHeight = img.getBoundingClientRect().height;
        const articleTopHeight = articleTop.getBoundingClientRect().height;
        const articleBottomHeight = articleBottom.getBoundingClientRect().height;

        facility.style.height = `${imgHeight + articleTopHeight + paddingTop + paddingBottom}px`;

        facility.addEventListener('mouseover', () => {
          const newMinHeight = imgHeight - articleBottomHeight;
          img.style.minHeight = `${newMinHeight}px`;
        });

        facility.addEventListener('mouseout', () => {
          img.style.minHeight = `${imgHeight}px`;
        });

        button.addEventListener('click', () => {
          const isExpanded = facility.classList.toggle('expanded');
          if (isExpanded) {
            facility.style.height = `${imgHeight + articleTopHeight + articleBottomHeight + paddingTop + paddingBottom}px`;
          } else {
            facility.style.height = `${imgHeight + articleTopHeight + paddingTop + paddingBottom}px`;
          }
        });
      };

      calculateHeight();
      window.addEventListener('resize', calculateHeight);
    });
  };

  // Функция для мобильных устройств
  const handleFacilitiesMobile = () => {
    facilities.forEach(facility => {
      const article = facility.querySelector('.index-ourFacilities__content-info__article');
      const articleTop = facility.querySelector('.index-ourFacilities__content-info__article-top');
      const expandBtn = facility.querySelector('.index-ourFacilities__content-info__btn');

      article.style.height = `${articleTop.offsetHeight}px`;

      expandBtn.addEventListener('click', function() {
        if (expandBtn.classList.contains('active')) {
          article.style.height = `${articleTop.offsetHeight}px`;
          expandBtn.querySelector('p').textContent = 'Раскрыть';
        } else {
          article.style.height = `${article.scrollHeight}px`;
          expandBtn.querySelector('p').textContent = 'Свернуть';
        }
        expandBtn.classList.toggle('active');
      });
    });
  };

  // Убираем старые обработчики перед переключением
  const removeEventListeners = () => {
    facilities.forEach(facility => {
      const img = facility.querySelector('.index-ourFacilities__content-info__img');
      const button = facility.querySelector('.index-ourFacilities__content-info__btn');

      img.style.minHeight = '';
      facility.style.height = '';
      facility.classList.remove('expanded');

      button.replaceWith(button.cloneNode(true)); // Удаляем все обработчики с кнопки
    });
  };

  // Проверка ширины экрана и выбор кода
  const checkScreenWidth = () => {
    removeEventListeners();
    if (window.innerWidth <= 768) {
      handleFacilitiesMobile();
    } else {
      handleFacilitiesDesktop();
    }
  };

  checkScreenWidth();
  window.addEventListener('resize', checkScreenWidth);
});


/*document.addEventListener('DOMContentLoaded', () => {
  const facilities = document.querySelectorAll('.index-ourFacilities__content-info__article-bottom__available');

  facilities.forEach(facility => {
      const items = facility.querySelectorAll('.index-ourFacilities__content-info__article-bottom__available-list__item');
      const button = facility.querySelector('.available-btn');

      // Initially show the first two items
      items.forEach((item, index) => {
          if (index < 2) {
              item.style.display = 'list-item'; // Show first two items
          } else {
              item.style.display = 'none'; // Hide others
          }
      });

      // Set initial button text
      button.innerHTML = `Показать еще <span>${items.length - 2}</span>`;

      button.addEventListener('click', () => {
          const hiddenItems = Array.from(items).filter(item => item.style.display === 'none');
          const isExpanded = hiddenItems.length === 0;

          if (isExpanded) {
              // Collapse: hide all except first two
              items.forEach((item, index) => {
                  if (index >= 2) {
                      item.style.display = 'none';
                  }
              });
              button.innerHTML = `Показать еще <span>${items.length - 2}</span>`;
          } else {
              // Expand: show all items
              items.forEach(item => {
                  item.style.display = 'list-item';
              });
              button.textContent = 'Скрыть';
          }
      });
  });
});*/


document.addEventListener("DOMContentLoaded", function () {
  // Элементы для навигации
  const btnVideo = document.getElementById("index-btn-stocks-stocks"); // Button for stocks
  const btnRead = document.getElementById("index-btn--stocks-news"); // Button for news
  const reviewsVideoBlocks = document.querySelector(".stocks-list"); // Stock content block
  const reviewsReadBlocks = document.querySelector(".news-list"); // News content block
  const btnPrev = document.getElementById("index-btn--stocks-prev"); // Previous button
  const btnNext = document.getElementById("index-btn--stocks-next"); // Next button

  // Начальные настройки
  let activeBlock = reviewsVideoBlocks; // By default, show the stocks content block

  // Функция для получения ширины карточки и правого отступа из CSS для текущего активного блока
  function getScrollWidthForActiveBlock() {
    const firstCard = activeBlock.querySelector("li"); // Assuming cards are <li> elements
    if (firstCard) {
      const style = window.getComputedStyle(firstCard);
      const cardWidth = parseFloat(style.width); // Read width from CSS
      const marginRight = parseFloat(style.marginRight); // Read right margin from CSS
      return cardWidth + marginRight;
    }
    return 0;
  }

  let scrollWidth = getScrollWidthForActiveBlock(); // Initial scroll width

  // Функция для переключения видимых блоков
  function toggleActiveBlock(showElement, hideElement, activeButton, inactiveButton) {
    // Show the specified block and hide the other
    showElement.style.display = "flex";
    hideElement.style.display = "none";

    // Update active button
    activeButton.classList.add("active");
    inactiveButton.classList.remove("active");

    // Reassign active block for scrolling
    activeBlock = showElement;

    // Update scroll width for the new active block
    scrollWidth = getScrollWidthForActiveBlock();
    activeBlock.scrollTo({ left: 0 }); // Reset scroll position
  }

  // Switch content blocks when buttons "Акции" and "Новости" are clicked
  btnVideo.addEventListener("click", () => toggleActiveBlock(reviewsVideoBlocks, reviewsReadBlocks, btnVideo, btnRead));
  btnRead.addEventListener("click", () => toggleActiveBlock(reviewsReadBlocks, reviewsVideoBlocks, btnRead, btnVideo));

  // Функция для точного скроллинга на экранах шире 768px
  let isScrolling = false;

  function preciseScroll(direction) {
    if (isScrolling) return;
    isScrolling = true;

    const currentScrollPosition = activeBlock.scrollLeft;
    const newScrollPosition = currentScrollPosition + direction * scrollWidth;

    activeBlock.scrollTo({
      left: newScrollPosition,
      behavior: "smooth"
    });

    setTimeout(() => {
      isScrolling = false;
    }, 400);
  }

  // Event listeners for "previous" and "next" buttons
  btnPrev.addEventListener("click", () => preciseScroll(-1));
  btnNext.addEventListener("click", () => preciseScroll(1));

  // Adding swipe functionality for mobile devices
  let startX = 0;
  let currentX = 0;

  activeBlock.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  activeBlock.addEventListener("touchmove", (e) => {
    currentX = e.touches[0].clientX;
  });

  activeBlock.addEventListener("touchend", () => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // On smaller screens (< 768px), swipe scrolls content without card alignment
      const scrollAmount = startX - currentX;
      activeBlock.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    } else {
      // On larger screens, scroll is tied to the card width
      if (startX - currentX > 50) {
        preciseScroll(1); // Scroll right
      } else if (currentX - startX > 50) {
        preciseScroll(-1); // Scroll left
      }
    }
  });

  // Update scroll width on window resize
  window.addEventListener("resize", () => {
    scrollWidth = getScrollWidthForActiveBlock();
  });
});










document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.stocksAndNews-feedback__content-form');
  const nameInput = document.getElementById('stocksAndNews-feedback-name');
  const telInput = document.getElementById('stocksAndNews-feedback-tel');


  telInput.addEventListener('input', () => {

    if (!telInput.value.startsWith('+7')) {
      telInput.value = '+7';
    }

    telInput.value = telInput.value.replace(/[^\d+]/g, '');

    if (telInput.value.length > 12) {
      telInput.value = telInput.value.slice(0, 12);
    }
  });

  nameInput.addEventListener('input', () => {
    nameInput.value = nameInput.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, '');
  });

  form.addEventListener('submit', (event) => {
    let isValid = true;

    nameInput.style.backgroundColor = '';
    telInput.style.backgroundColor = '';

    if (!nameInput.value.trim()) {
      nameInput.style.backgroundColor = 'rgb(255, 142, 142, 0.2)';
      isValid = false;
    }

    if (telInput.value.length < 12) {
      telInput.style.backgroundColor = 'rgb(255, 142, 142, 0.2)';
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault();
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  ymaps.ready(function () {
      // Создаем карту
      var myMap = new ymaps.Map("map", {
          center: [44.791303, 37.402264],
          zoom: 16
      });

      // Контейнер для меток
      var markers = [];

      // Данные меток из HTML
      var markerData = document.getElementById("marker-data").children;
      Array.from(markerData).forEach((item, index) => {
          var coords = JSON.parse(item.getAttribute("data-coords"));
          var title = item.getAttribute("data-title");

          // HTML-содержимое для кастомной метки с разделением на иконку и текст
          var markerContent = `
              <div class="map-marker">
                  <div class="map-marker-icon">
                      <svg width="19" height="20" viewBox="0 0 19 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0V5.25418L5.23193 0H0Z" />
                          <path d="M0 13.0872L12.6456 0.389617C11.7922 0.133588 10.7978 0 9.66235 0H9.27275L0 9.30983V13.0872Z" />
                          <path d="M17.4137 10.9276C17.0056 10.0594 16.3822 9.35064 15.551 8.80519C16.2746 7.85157 16.6382 6.73469 16.6382 5.46567C16.6382 4.69016 16.4972 3.9666 16.2152 3.2987C15.9889 2.75695 15.6549 2.27457 15.2319 1.85156L0 17.1429V20H11.0501C12.2375 20 13.269 19.8553 14.1447 19.5733C15.0204 19.2876 15.744 18.8794 16.3191 18.3451C16.8943 17.8108 17.321 17.1688 17.603 16.4193C17.885 15.6697 18.026 14.8274 18.026 13.8998C18.026 12.7903 17.8219 11.8033 17.4137 10.9313" />
                      </svg>
                  </div>
                  <div class="map-marker-text">${title}</div>
              </div>`;

          // Метка с HTML-содержимым
          var marker = new ymaps.Placemark(coords, {
              hintContent: title,
              balloonContent: title
          }, {
              iconLayout: 'default#imageWithContent',
              iconContentLayout: ymaps.templateLayoutFactory.createClass(markerContent),
              iconImageSize: [30, 30],
              iconImageOffset: [-15, -30]
          });

          // Добовление метки на карту и в массив
          myMap.geoObjects.add(marker);
          markers.push(marker);
      });

      // Обработчики для кнопок
      document.querySelectorAll(".contacts-hero__content-list__item-btn").forEach(button => {
          button.addEventListener("click", function () {
              var index = this.getAttribute("data-marker");
              var marker = markers[index];
              if (marker) {
                  myMap.panTo(marker.geometry.getCoordinates(), { flying: true });
              }
          });
      });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contacts-feedback__content-form');
  const nameInput = document.getElementById('contacts-feedback-name');
  const telInput = document.getElementById('contacts-feedback-tel');


  telInput.addEventListener('input', () => {

    if (!telInput.value.startsWith('+7')) {
      telInput.value = '+7';
    }

    telInput.value = telInput.value.replace(/[^\d+]/g, '');

    if (telInput.value.length > 12) {
      telInput.value = telInput.value.slice(0, 12);
    }
  });

  nameInput.addEventListener('input', () => {
    nameInput.value = nameInput.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, '');
  });

  form.addEventListener('submit', (event) => {
    let isValid = true;

    nameInput.style.backgroundColor = '';
    telInput.style.backgroundColor = '';

    if (!nameInput.value.trim()) {
      nameInput.style.backgroundColor = 'rgb(255, 142, 142, 0.2)';
      isValid = false;
    }

    if (telInput.value.length < 12) {
      telInput.style.backgroundColor = 'rgb(255, 142, 142, 0.2)';
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault();
    }
  });
});






