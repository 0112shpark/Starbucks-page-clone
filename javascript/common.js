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

// refresh year

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
