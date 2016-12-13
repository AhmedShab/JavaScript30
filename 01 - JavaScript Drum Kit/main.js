const keys = document.querySelectorAll('.keys');

keys.forEach(key => {
});

this.addEventListener('keydown', playSound);

// play the sound
function playSound(e) {
    const keys = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audio = document.querySelectorAll(`audio[data-key="${e.keyCode}"]`)[0];

    if (keys) {
        const play = new Audio(audio.src);
        play.play();
    }
}