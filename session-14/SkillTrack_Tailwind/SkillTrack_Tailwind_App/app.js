const root = document.documentElement;
const themeButton = document.querySelector("#themeButton");
const themeIcon = document.querySelector("#themeIcon");
const mobileButton = document.querySelector("#mobileButton");
const mobileMenu = document.querySelector("#mobileMenu");

function applyTheme(theme) {
  const isDark = theme === "dark";
  root.classList.toggle("dark", isDark);
  if (themeIcon) {
    themeIcon.textContent = isDark ? "☀️" : "🌙";
    themeIcon.classList.remove("theme-spin");
    void themeIcon.offsetWidth;
    themeIcon.classList.add("theme-spin");
  }
}

const savedTheme = localStorage.getItem("skilltrack-theme");
const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(savedTheme || (preferredDark ? "dark" : "light"));

themeButton?.addEventListener("click", () => {
  const nextTheme = root.classList.contains("dark") ? "light" : "dark";
  localStorage.setItem("skilltrack-theme", nextTheme);
  applyTheme(nextTheme);
  showToast(`${nextTheme[0].toUpperCase() + nextTheme.slice(1)} theme enabled`);
});

mobileButton?.addEventListener("click", () => {
  mobileMenu?.classList.toggle("hidden");
});

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-ready");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.12 },
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  document.querySelectorAll(".progress-fill").forEach((bar) => {
    const width = bar.dataset.width || "0%";
    setTimeout(() => (bar.style.width = width), 250);
  });
});
