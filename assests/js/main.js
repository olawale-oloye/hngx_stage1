// Variable Declaration
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const openNav = document.querySelector(".ri-menu-line");
const closeNav = document.querySelector(".ri-close-line");
const navList = document.querySelector("nav ul");

// To display Day of the Week
const currentDateValue = days[new Date().getDay()];
document.querySelector(".current-day").textContent = currentDateValue;

// To display the current UTC time
const currentUTCTImeValue = new Date(
  new Date().getTime() - new Date().getTimezoneOffset() * 60000
)
  .toISOString()
  .toString();

document.querySelector(".current-time").textContent = currentUTCTImeValue;

// .slice(11, 19)
