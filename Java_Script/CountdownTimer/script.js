const daysElem = document.getElementById('days');
const hoursElem = document.getElementById('hours');
const minsElem = document.getElementById('mins');
const secondsElem = document.getElementById('seconds');

const newYears = '1 Jan 2022';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    // console.log(days, hours, minutes, seconds);

    daysElem.innerHTML = formatTime(days);
    hoursElem.innerHTML = formatTime(hours);
    minsElem.innerHTML = formatTime(minutes);
    secondsElem.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0 ${time}` : time;
}

//initial call
countdown();

setInterval(countdown, 1000);
