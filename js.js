const deadline = new Date("June 21, 2023 00:00:00").getTime();

const daysSpan = document.querySelector(".days");
const hoursSpan = document.querySelector(".hours");
const minutesSpan = document.querySelector(".minutes");
const secondsSpan = document.querySelector(".seconds");

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function calculateTimeLeft() {
  const currentTime = new Date().getTime();
  const difference = deadline - currentTime;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  daysSpan.textContent = formatTime(days);
  hoursSpan.textContent = formatTime(hours);
  minutesSpan.textContent = formatTime(minutes);
  secondsSpan.textContent = formatTime(seconds);
}

setInterval(calculateTimeLeft, 1000);