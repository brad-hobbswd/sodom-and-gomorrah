document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header-inner");
  const nav = document.querySelector(".site-nav");
  const toggle = document.querySelector(".site-nav-toggle");

  if (!header || !nav || !toggle) return;

  const closeMenu = () => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");
    toggle.classList.remove("is-open");
    nav.classList.remove("is-open");
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
    toggle.classList.toggle("is-open", !isOpen);
    nav.classList.toggle("is-open", !isOpen);
  });

  nav.addEventListener("click", event => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) closeMenu();
  });
});