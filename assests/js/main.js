// Variable Declaration

const currentDay = document.querySelector(".current-day");
const currentTime = document.querySelector(".current-time");
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// const timeTest = new Date().toString().split(" ").slice(0, 1);
const currentDateValue = days[new Date().getDay()];
currentDay.textContent = `Today is ${currentDateValue}`;

const currentUTCTImeValue = new Date(
  new Date().getTime() - new Date().getTimezoneOffset() * 60000
)
  .toISOString()
  .toString()
  .slice(11, 19);

currentTime.textContent = `Current UTC Time is ${currentUTCTImeValue}`;
