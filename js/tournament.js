"use strict";

const modal = document.querySelectorAll(".modal");
const signup = document.querySelector(".signup");
const login = document.querySelector(".login");
const formLinks = document.querySelectorAll(".toggle-form--link");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelectorAll(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

// modal window ===========================================>
const openModal = function (e) {
  e.preventDefault();
  modal.forEach((modal) => modal.classList.remove("hidden"));
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.forEach((modal) => modal.classList.add("hidden"));
  overlay.classList.add("hidden");
  signup.style.opacity = 0;
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.forEach((btn) => btn.addEventListener("click", closeModal));
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  e.preventDefault();
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

formLinks.forEach((link) =>
  link.addEventListener("click", function (e) {
    e.preventDefault();
    login.classList.toggle("hidden");
    if (login.classList.contains("hidden")) {
      signup.style.opacity = 1;
    } else {
      signup.style.opacity = 0;
    }
  })
);

// filter drop down

const dropdown = document.querySelectorAll(".dropdown");
const div = dropdown.forEach((dropdown) => {
  const caret = dropdown.querySelector(".caret");
  const select = dropdown.querySelector(".select");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li ");
  const selected = dropdown.querySelector(".selected");

  const menuOpen = function () {
    select.classList.add("select-clicked");
    caret.classList.add("caret-rotate");
    menu.classList.add("menu-open");
  };
  const menuClose = function () {
    select.classList.remove("select-clicked");
    caret.classList.remove("caret-rotate");
    menu.classList.remove("menu-open");
  };

  const onClick = function () {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  };

  // dropdown.addEventListener("click", onClick);
  dropdown.addEventListener("mouseenter", menuOpen);
  dropdown.addEventListener("mouseleave", menuClose);
  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");
      options.forEach((option) => option.classList.remove("active-menu"));
      option.classList.add("active-menu");
    });
  });
});

// filter-btn

const toggleBtn = document.querySelectorAll(".toggle-btn");
toggleBtn.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleBtn.forEach((btn) => btn.classList.remove("toggle-active"));
    btn.classList.add("toggle-active");
  })
);

// swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,
  keyboard: {
    enabled: true,
  },
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// scroll btns

// const allLinks = document.querySelectorAll("a:link");

// allLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = link.getAttribute("href");
//     if (href === "#")
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     if (href !== "#" && href.startsWith("#")) {
//       const section = document.querySelector(href);
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   });
// });
