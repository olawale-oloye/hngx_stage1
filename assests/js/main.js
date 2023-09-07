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
document.querySelector(
  ".current-day"
).textContent = `Today is ${currentDateValue}`;

// To display the current UTC time
const currentUTCTImeValue = new Date(
  new Date().getTime() - new Date().getTimezoneOffset() * 60000
)
  .toISOString()
  .toString()
  .slice(11, 19);

document.querySelector(
  ".current-time"
).textContent = `Current UTC Time is ${currentUTCTImeValue}`;

// Toggler
openNav.addEventListener("click", function () {
  navList.style.top = "17%";
  openNav.style.display = "none";
  closeNav.style.display = "block";
});

function closeNavToggler() {
  navList.style.top = "-70%";
  openNav.style.display = "block";
  closeNav.style.display = "none";
}

closeNav.addEventListener("click", function () {
  closeNavToggler();
});

document.querySelectorAll("nav ul li a").forEach((navList) => {
  navList.addEventListener("click", function () {
    closeNavToggler();
  });
});
