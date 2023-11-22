// Query Selectors
const habits = document.querySelectorAll(".habit-btn");
const themeBtn = document.querySelector("#theme");

// FUNCTIONS

const storage = {
  saveTheme(value) {
    localStorage.setItem("habitsapp.theme", `${value}`);
  },
  checkTheme() {
    return localStorage.getItem("habitsapp.theme");
  },
};

const ui = {
  theme() {
    themeBtn.classList.toggle("dark");
    const root = document.querySelector(":root");
    root.classList.toggle("dark");
    themeBtn.classList.contains("dark")
      ? storage.saveTheme("dark")
      : storage.saveTheme("light");
  },
};

// EVENT LISTENERS

// EVENT: window load
window.addEventListener("DOMContentLoaded", () => {
  // Load theme
  const theme = storage.checkTheme();
  if (theme === "dark") ui.theme();
});

// EVENT: theme button

themeBtn.addEventListener("click", ui.theme);

habits.forEach((habit) => {
  habit.addEventListener("click", () => {
    habit.classList.toggle("completed");
  });
});
