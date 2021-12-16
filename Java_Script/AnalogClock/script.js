setInterval(setClock, 1000);

const hourData = document.querySelector('[hour]');
const minuteData = document.querySelector('[minute]');
const secondData = document.querySelector('[second]');

function setClock() {
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    setMotion(secondData, secondRatio);
    setMotion(minuteData, minutesRatio);
    setMotion(hourData, hoursRatio);
}

function setMotion(elem, ratio) {
    elem.style.setProperty('--rotation', ratio * 360);
}

setClock();
