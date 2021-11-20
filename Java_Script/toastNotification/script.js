const btn = document.getElementById('btn');
const container = document.getElementById('container');

btn.addEventListener('click', () => {
    createNotification();
});

function createNotification() {
    const notific = document.createElement('div');
    notific.classList.add('toast');
    notific.innerText = 'You Click the Button ';
    container.appendChild(notific);

    setTimeout(() => {
        notific.remove();
    }, 3000);
}
