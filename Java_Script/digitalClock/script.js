var displayDate = document.getElementById('displayDate');
function showTime() {
    var date = new Date();
    var hour = date.getHours();
    var minuits = date.getMinutes();
    var seconds = date.getSeconds();
    var session = 'am';

    if (hour == 0) {
        hour = 12;
    }
    if (hour > 12) {
        hour = hour - 12;
        session = 'pm';
    }
    hour = hour < 10 ? '0' + hour : hour;
    minuits = minuits < 10 ? '0' + minuits : minuits;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    displayDate.innerHTML = `${hour} : ${minuits} : ${seconds}  ${session}`;
    setTimeout(showTime, 1000);
}
showTime();
