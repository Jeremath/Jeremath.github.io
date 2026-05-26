const navToggle = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
const newsList = document.querySelector("#news-list");
const newsToggle = document.querySelector(".news-toggle");
const wechatTrigger = document.querySelector("[data-wechat-trigger]");
const wechatPanel = document.querySelector("#wechat-panel");
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
  const extraNews = [...newsList.children].slice(10);
  const shouldCollapse = extraNews.length > 0;

  if (shouldCollapse) {
    newsToggle.addEventListener("click", () => {
      const expanded = newsToggle.getAttribute("aria-expanded") === "true";
      const nextExpanded = !expanded;
      newsToggle.setAttribute("aria-expanded", String(nextExpanded));
      extraNews.forEach((item) => item.classList.toggle("is-hidden", !nextExpanded));
      newsToggle.textContent = nextExpanded ? "Show less" : "Show more";
    });
  } else {
    newsToggle.hidden = true;
  }
}

if (wechatTrigger && wechatPanel) {
  wechatTrigger.addEventListener("click", () => {
    const expanded = wechatTrigger.getAttribute("aria-expanded") === "true";
    wechatTrigger.setAttribute("aria-expanded", String(!expanded));
    wechatPanel.hidden = expanded;
  });
}
