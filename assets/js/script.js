const minutes = 10;
let time = minutes * 60; // 10 minutos em segundos
let vagas = 10; // Número inicial de vagas

const countdownElement = document.querySelector('.countdown');
const vagasElement = document.querySelector('.vagas');

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

function updateVagas() {
    if (vagas > 0) {
        vagas--;
        vagasElement.innerText = `${vagas} VAGAS`;
    }
}

const countdownInterval = setInterval(updateCountdown, 1000); // Atualiza a contagem regressiva a cada segundo

setInterval(updateVagas, 5000); // Atualiza as vagas a cada 10 segundos
