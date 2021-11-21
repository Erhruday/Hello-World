const sounds = ['birds', 'dog', 'horse', 'lion', 'whistler'];

sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs();
        document.getElementById(sound).play();
    });
    document.body.appendChild(btn);
});

function stopSongs() {
    sounds.forEach((sound) => {
        const songs = document.getElementById(sound);
        songs.pause();
        songs.currentTime = 0;
    });
}
