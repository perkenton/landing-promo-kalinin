import '../pages/index.css';

import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

'use strict';

(function() {

  const swiperContainers = document.querySelectorAll('.swiper__container');

  swiperContainers.forEach((el) => {

    new Swiper(el, {
      init: true,
      slidesPerView: 'auto',
      setWrapperSize: true,
      grabCursor: true,
      loop: true,
      spaceBetween: 15,
      wrapperClass: 'swiper__wrapper',
      slideClass: 'swiper__image',

      pagination: {
        el: el.querySelector('.swiper__pagination-container'),
        type: 'bullets',
        clickable: true,
        bulletClass: 'swiper__pagination-item',
        bulletActiveClass: 'swiper__pagination-item_is-active',
      },

      navigation: {
        nextEl: el.querySelector('.swiper__arrow-next'),
        prevEl: el.querySelector('.swiper__arrow-prev'),
      },
    });
  });

})();