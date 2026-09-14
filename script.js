const pageContent = document.querySelector("main");
const pageFooter = document.querySelector("footer");

menubutton.addEventListener("click", () => {
  navmenu.classList.toggle("open");
  pageContent.classList.toggle("blurred");
  pageFooter.classList.toggle("blurred");
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navmenu.classList.remove("open");
    pageContent.classList.remove("blurred");
    pageFooter.classList.remove("blurred");
  });
});
const topButton = document.getElementById("topButton");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    topButton.classList.add("show");
  } else {
    topButton.classList.remove("show");
  }
});

topButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
const themebutton = document.getElementById("theme-button");
themebutton.addEventListener("click", () => {
  document.body.classList.toggle("light");
  if (document.body.classList.contains("light")) {
    themebutton.textContent = "🌙";
    localStorage.setItem("theme", "light");
  } else {
    themebutton.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  }
});
const savedtheme = localStorage.getItem("theme");
if (savedtheme === "light") {
  document.body.classList.add("light");
  themebutton.textContent = "🌙";
}
