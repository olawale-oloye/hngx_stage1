// Variable Declaration

document.addEventListener("DOMContentLoaded", function () {
  const slackUserName = document.querySelector('[data-testid="slackUserName"]');

  const slackDisplayPicture = document.querySelector(
    '[data-testid="slackDisplayImage"]'
  );
  const currentDayOfTheWeek = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );
  const currentUTCTime = document.querySelector(
    '[data-testid="currentUTCTime"]'
  );

  const currentUTCTimeMs = document.querySelector(
    '[data-testid="currentUTCTimeMs"]'
  );

  const myTrack = document.querySelector('[data-testid="myTrack"]');
  const myGitURL = document.querySelector('[data-testid="githubURL"]');

  function updateDateTime() {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDateValue = days[new Date().getDay()];
    document.querySelector(".current-day").textContent = currentDateValue;

    const currentUTCTImeValue = new Date(
      new Date().getTime() - new Date().getTimezoneOffset() * 60000
    )
      .toISOString()
      .toString()
      .slice(11, 19);

    const currnetUTCTimeMsValue = new Date().getTime();

    slackUserName.textContent = "Olawale Oloye";
    slackDisplayPicture.alt = "Adoravel_Fish";
    currentDayOfTheWeek.textContent = currentDateValue;
    currentUTCTime.textContent = currentUTCTImeValue;
    currentUTCTimeMs.textContent = currnetUTCTimeMsValue;
    myTrack.textContent = "Frontend";
    myGitURL.href = "https://github.com/olawale-oloye/hngx_stage1";
  }

  updateDateTime();
  setInterval(updateDateTime, 1000);
});
