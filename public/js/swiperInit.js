var mainSwiper = new Swiper(".mainSwiper", {
  // Optional parameters
  direction: "horizontal",
  //loop: true,
  spaceBetween: 30,
  initialSlide: 1,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1.5,
  coverflowEffect: {
    rotate: 60,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: true
  },
  // If we need pagination
  pagination: {
    el: ".mainSwiperPagination",
    dynamicBullets: true
  },
  // Navigation arrows
  navigation: {
    nextEl: ".mainSwiperNext",
    prevEl: ".mainSwiperPrev"
  }
});

var hourlySwiper = new Swiper(".hourlyContainer", {
  direction: "vertical",
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false
  },
  pagination: {
    el: ".hourlyPagination",
    clickable: true
  }
});

var dailySwiper = new Swiper(".dailyContainer", {
  direction: "vertical",
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false
  },
  pagination: {
    el: ".dailyPagination",
    clickable: true
  }
});
