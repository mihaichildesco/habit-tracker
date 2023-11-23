// Query Selectors
const habits = document.querySelectorAll(".habit-btn");
const themeBtn = document.querySelector("#theme");
const modalContainer = document.querySelector(".modal-container");
const createHabitBtn = document.querySelector(".new-habit__add");
const newHabitTitle = document.querySelector("#title");
const icons = document.querySelectorAll(".icon");
const addBtn = document.getElementById("#add");
const cancelBtn = document.querySelector("#cancel");

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
  openModal() {
    modalContainer.classList.add("active");
    modalContainer.setAttribute("aria-hidden", "false");
    newHabitTitle.focus();
  },
  closeModal() {
    modalContainer.classList.remove("active");
    modalContainer.setAttribute("aria-hidden", "true");
    newHabitTitle.value = "";
    ui.removeSelectedFromIcon();
  },
  removeSelectedFromIcon() {
    icons.forEach((icon) => {
      icon.classList.remove("selected");
    });
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

// EVENT: add habit btn
createHabitBtn.addEventListener("click", ui.openModal);

// EVENT: close modal
cancelBtn.addEventListener("click", ui.closeModal);

// EVENT: selected icon
icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    ui.removeSelectedFromIcon();
    icon.classList.add("selected");
  });
});

habits.forEach((habit) => {
  habit.addEventListener("click", () => {
    habit.classList.toggle("completed");
  });
});
