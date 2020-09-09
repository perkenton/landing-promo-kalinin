import '../pages/index.css';

import Swiper, { Navigation, Pagination } from 'swiper';

'use strict';

(function() {

  const swiperContainer = document.querySelector('.swiper__container');

  Swiper.use([Navigation, Pagination]);
  const swiper = new Swiper(swiperContainer, {
    init: true,
    slidesPerView: 'auto',
    setWrapperSize: true,
    grabCursor: true,
    loop: true,
    spaceBetween: 15,
    wrapperClass: 'swiper__wrapper',
    slideClass: 'swiper__image',

    pagination: {
      el: '.swiper__pagination-container',
      type: 'bullets',
      clickable: true,
      bulletClass: '.swiper__pagination-item',
      bulletActiveClass: '.swiper__pagination-item_is-active',
    },

    navigation: {
      nextEl: '.swiper__arrow-next',
      prevEl: '.swiper__arrow-prev',
    },
  });

})();