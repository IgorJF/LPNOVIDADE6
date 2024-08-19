// Script de contagem regressiva
const minutes = 10;
let time = minutes * 60; // 10 minutos em segundos

const countdownElement = document.querySelector('.countdown');

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    document.getElementById('minutes').innerText = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? `0${seconds}` : seconds;

    time--;

    if (time < 0) {
        clearInterval(countdownInterval);
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
