// Navbar Fixed
const header = document.querySelector("header");
const fixedNav = header.offsetTop;

// Hamburger
const buttonHamburger = document.querySelector("button#hamburger");
const navMenu = document.querySelector("nav#nav-menu");

// Back to Top button
const buttonTop = document.querySelector("a#btn-top");

window.onscroll = () => {
  if (window.scrollY > 0) {
    header.classList.add("navbar-fixed");
    navMenu.classList.add("bg-opacity-80");
    buttonTop.classList.remove("hidden");
  } else {
    header.classList.remove("navbar-fixed");
    navMenu.classList.remove("bg-opacity-80");
    buttonTop.classList.add("hidden");
  }
};

buttonHamburger.addEventListener("click", () => {
  buttonHamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// checkbox dark mode
const toggleDarkMode = document.querySelector("input#toggle-dark");
const html = document.querySelector("html");

// icon dark mode
const moonIcon = document.querySelector("svg#moon-icon");
const sunIcon = document.querySelector("svg#sun-icon");

// Check mode from local storage
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  toggleDarkMode.defaultChecked = true;
  moonIcon.classList.add("hidden");
  sunIcon.classList.remove("hidden");
} else {
  toggleDarkMode.defaultChecked = false;
  moonIcon.classList.remove("hidden");
  sunIcon.classList.add("hidden");
}

// Check local storage for dark mode
toggleDarkMode.addEventListener("click", () => {
  if (toggleDarkMode.checked) {
    html.classList.add("dark");
    moonIcon.classList.add("hidden");
    sunIcon.classList.remove("hidden");

    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    moonIcon.classList.remove("hidden");
    sunIcon.classList.add("hidden");

    localStorage.theme = "light";
  }
});
