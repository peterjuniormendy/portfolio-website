const navbar = document.querySelector(".navbar");
const navItems = document.querySelectorAll(".nav-item");
const mobile_nav = document.querySelector(".mobile-nav");
const toggleButton = document.querySelector(".toggle-button i");
const social_icons = document.querySelectorAll(".nav-item i");
const sections = document.querySelectorAll("section");
const backToTop = document.querySelector(".back-to-top");
const contact = document.querySelector(".contact");

document.addEventListener("scroll", function () {
  // Setting light or dark background to navber on scroll.
  if (window.scrollY >= navbar.offsetHeight) {
    navbar.classList.add("light");
    mobile_nav.classList.add("light");
    toggleButton.style.color = "black";
    contact.style.color = "black";
    contact.style.borderColor = "black";
  } else {
    navbar.classList.remove("light");
    mobile_nav.classList.remove("light");
    toggleButton.style.color = "white";
    contact.style.color = "white";
    contact.style.borderColor = "white";
  }

  // Setting the back to top on scroll
  if (window.scrollY >= 200) {
    backToTop.style.opacity = "1";
    backToTop.style.transform = "translateY(0)";
  } else {
    backToTop.style.opacity = "0";
    backToTop.style.transform = "translateY(200px)";
  }

  // Setting the active class to the active section on scroll.
  let active = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 50) {
      active = section.getAttribute("id");
    }
  });

  navItems.forEach((navItem) => {
    navItem.classList.remove("active");
    if (navItem.getAttribute("href").slice(1) == active) {
      navItem.classList.add("active");
    }
  });
});

// Switching toggle button on click.
toggleButton.addEventListener("click", function () {
  mobile_nav.classList.toggle("show");
  toggleButton.classList.toggle("fa-bar");
  toggleButton.classList.toggle("fa-times");
});

// Hiding the mobile nav by clicking any position on the page.
document.addEventListener("click", function (event) {
  if (
    event.target != toggleButton &&
    toggleButton.classList.contains("fa-times")
  ) {
    toggleButton.classList.remove("fa-times");
    toggleButton.classList.remove("fa-bar");
    mobile_nav.classList.toggle("show");
  }
});
