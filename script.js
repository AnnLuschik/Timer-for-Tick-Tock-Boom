const min = 10;
const max = 10;

const bomb = document.querySelector('.bomb');
const bombSound = document.querySelector('audio');

bomb.addEventListener('click', startTimer);

function startTimer() {
	let time = Math.floor(Math.random() * (max - min + 1) + min) * 1000;
	setTimeout(playSound, time);
}

function playSound() {
	bombSound.play();
}
