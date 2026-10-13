
document.getElementById("year").textContent = new Date().getFullYear();


const helloButton = document.getElementById("hello-button");
const helloMessage = document.getElementById("hello-message");

helloButton.addEventListener("click", function () {
  helloMessage.textContent = "Hi there! Thanks for taking the time to check out my work.";
});


const root = document.documentElement;
const themeButton = document.getElementById("theme-toggle");
const themeLabel = document.getElementById("theme-label");

function applyTheme(theme) {
  const isDark = theme === "dark";
  root.setAttribute("data-theme", theme);
  themeButton.setAttribute("aria-pressed", String(isDark));
  themeButton.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  themeLabel.textContent = isDark ? "Light mode" : "Dark mode";
}

applyTheme(root.getAttribute("data-theme") || "light");

themeButton.addEventListener("click", function () {
  const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  try {
    localStorage.setItem("theme", nextTheme);
  } catch (error) {
    
  }
});
