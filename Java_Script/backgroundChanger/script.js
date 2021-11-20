const btn = document.getElementById('btn');
setInterval(() => {
    // btn.addEventListener('click', () => {
    document.body.style.background = randomBg();
    // });
}, 1000);

function randomBg() {
    return `hsl(${Math.floor(Math.random() * 360)},100%,50%)`;
}
