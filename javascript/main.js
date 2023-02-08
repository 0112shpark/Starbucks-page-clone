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

// toggle promotion
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add("hide");
  } else {
    promotionEl.classList.remove("hide");
  }
});

// floating object

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size, // move to y-axis
    repeat: -1, //  infinite
    yoyo: true, // repeat backward
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}

// generate random float between min and max to 2-digit decimal
function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);
