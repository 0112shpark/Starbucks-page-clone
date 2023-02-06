const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

//  if click, add focus
searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

//  add placeholder
searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

//  remove placeholder
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

// badge elimination
// _.throttle(function, time); ->delay
const badgeEl = document.querySelector("header .badges");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 500) {
      // hide badge
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      // show badge
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);

// section part animation
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

// swiper.js
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: {
    disableOnInteraction: false,
  },
  loop: true,
  allowTouchMove: false,
});

new Swiper(".promotion .swiper-container", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  allowTouchMove: false,
  pagination: {
    el: ".promotion .swiper-pagination", // page number selector
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});
