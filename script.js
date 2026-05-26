const navToggle = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
const newsList = document.querySelector("#news-list");
const newsToggle = document.querySelector(".news-toggle");
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navLinks.classList.toggle("open");
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navToggle.setAttribute("aria-expanded", "false");
      navLinks.classList.remove("open");
    }
  });
}

if (newsList && newsToggle) {
  const shouldCollapse = newsList.children.length > 10;

  if (shouldCollapse) {
    newsList.classList.add("collapsed");

    newsToggle.addEventListener("click", () => {
      const expanded = newsToggle.getAttribute("aria-expanded") === "true";
      newsToggle.setAttribute("aria-expanded", String(!expanded));
      newsList.classList.toggle("collapsed", expanded);
      newsToggle.textContent = expanded ? "Show more" : "Show less";
    });
  } else {
    newsToggle.hidden = true;
  }
}
