"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const header = document.querySelector(".header");
const sectionTrending = document.querySelector("#section-trending");
const cardOverlay = document.querySelectorAll(".card-overlay");
const Cards = document.querySelectorAll(".card");

// modal window ===========================================
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  e.preventDefault();
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
// ======================================================

// side bar

const sidebarNav = document.querySelector(".sidebar-nav");
const sidebarLinks = document.querySelectorAll(".sidebar-nav-link");

sidebarNav.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("sidebar-nav-link")) {
    // // scroll
    // const id = e.target.getAttribute("href");
    // document.querySelector(id).scrollIntoView({ behavior: "smooth" });

    // left-border
    sidebarLinks.forEach((link) => link.classList.remove("active-sidebar"));
    e.target.classList.add("active-sidebar");
  }
});

//  fade animation - sidebar ============================
/*
const handleHover = function (e) {
  if (e.target.classList.contains("sidebar-nav-link")) {
    const link = e.target;
    const siblings = link
      .closest(".sidebar-nav")
      .querySelectorAll(".sidebar-nav-link");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};
sidebarNav.addEventListener("mouseover", handleHover.bind(0.4));
sidebarNav.addEventListener("mouseout", handleHover.bind(1));
*/
// ========================================================

// swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// scroll to
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});
