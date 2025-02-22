let header = document.querySelector("header");
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

document.addEventListener("DOMContentLoaded", function () {
  let moviesLink = document.querySelector(".movies-link");
  let navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
          navbar.classList.add("scrolled");

          if (moviesLink) {
              moviesLink.classList.add("scrolled-text");
          }

          navLinks.forEach(link => {
              if (!link.classList.contains("active")) {
                  link.style.color = "black";
              }
          });

      } else {
          navbar.classList.remove("scrolled");

          if (moviesLink) {
              moviesLink.classList.remove("scrolled-text");
          }

          navLinks.forEach(link => {
              if (!link.classList.contains("active")) {
                  link.style.color = "red";
              }
          });
      }
  });
});
