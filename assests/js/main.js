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
